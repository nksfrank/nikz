import {Observable} from "rxjs/Observable";
import ChatActions from "../actions/chat-actions";

const postSettings = conversation => ({url: `http://localhost:3090/messages/${conversation.id}`, method: 'POST', body: {'message':conversation.inputValue}, headers: {'Content-Type':'application/json'}})
const retry = obs => obs.zip(Observable.range(1,3), (_, i) => i).flatMap(i => Observable.timer(i * 1000));

const initialState = {id: 1, inputValue: '', enterToSend: false, messages: []};
const ChatReducer$ = Observable.of(() => initialState)
  .merge(
    ChatActions.fetch$.switchMap(threadId => 
      Observable.ajax.getJSON(`http://localhost:3090/messages/${threadId}`)
      .retryWhen(retry)
      .map(value => value)
      .catch(Observable.of([]))
    ).map(payload => state => Object.assign({}, state, payload)),

    ChatActions.send$
      //press on send button
      .filter(({conversation, e}) => e.type === 'click' && conversation.inputValue && conversation.inputValue.length > 0)
      .switchMap(({conversation, e}) => Observable.ajax(postSettings(conversation))
        .map(response => response.response)
        .catch(Observable.empty()))
      .map(message => state => Object.assign({}, state, {inputValue: '', messages: [...state.messages, message]})),

    ChatActions.send$
      //hitting enter to send
      .filter(({conversation, e}) => e.type === 'keypress' && conversation.enterToSend && !e.shiftKey && e.key === 'Enter' && conversation.inputValue && conversation.inputValue.length > 0)
      .switchMap(({conversation, e}) => Observable.ajax(postSettings(conversation))
          .map(response => response.response)
          .catch(Observable.empty()))
      .map(message => state => Object.assign({}, state, {inputValue: '', messages: [...state.messages, message]})),

    ChatActions.keypress$
      .filter(({conversation, e}) => e.type === 'change' && !(conversation.enterToSend && e.shiftKey && e.key === 'Enter'))
      .map(({conversation, e}) => state => Object.assign({}, state, {inputValue: e.target.value})),
    
    ChatActions.enterToSend$.map(_payload => state => Object.assign({}, state, {enterToSend:!state.enterToSend})) 
  );

export default ChatReducer$