import {Observable} from "rxjs/Observable";
import ChatActions from "../actions/chat-actions";

const retry = obs => obs.zip(Observable.range(1,3), (_, i) => i).flatMap(i => Observable.timer(i * 1000));
const initialState = {id: 1, enterToSend: false, messages: [{"id":"d1d3630e-9d3d-4421-8fb2-f73ef861d2f1","timeStamp":1478905399256,"message":"lorem ipsum"}]};
const ChatReducer$ = Observable.of(() => initialState)
  .merge(
    ChatActions.fetch$.switchMap(threadId => 
      Observable.ajax.getJSON(`http://localhost:3090/messages/${threadId}`)
      .retryWhen(retry)
      .map(value => value)
      .catch(Observable.of([]))
    ).map(payload => state => Object.assign({}, state, payload)),

    ChatActions.send$
      .filter(({conversation, e}) => {console.log(conversation, e); return conversation.inputValue && conversation.inputValue.length > 0})
      .switchMap(({conversation, e}) => Observable.ajax({url: `http://localhost:3090/messages/${conversation.id}`, method: 'POST', body: {'message':conversation.inputValue}, headers: {'Content-Type':'application/json'}})
        .map(response => response.response)
        .catch(Observable.empty()))
      .map(message => state => Object.assign({}, state, {inputValue: '', messages: [...state.messages, message]})),

    ChatActions.keypress$
      .filter(({conversation, e}) => e.target.value && !(conversation.enterToSend && e.key === 'Enter' && !e.shiftKey) || e.key !== 'Enter')
      .map(({conversation, e}) => {console.log(e, e.target, e.target.value); return state => Object.assign({}, state, {inputValue: e.target.value})}),

    ChatActions.keypress$
    .filter(({conversation, e}) => e && conversation.enterToSend && !e.shiftKey && e.key === 'Enter')
    .switchMap(({conversation, e}) => Observable.ajax({url: `http://localhost:3090/messages/${conversation.id}`, method: 'POST', body: {'message':conversation.inputValue}, headers: {'Content-Type':'application/json'}})
        .map(response => response.response)
        .catch(Observable.empty()))
      .map(message => {console.log("send"); return state => Object.assign({}, state, {inputValue: '', messages: [...state.messages, message]})}),
    
    ChatActions.enterToSend$.map(_payload => state => Object.assign({}, state, {enterToSend:!state.enterToSend}))
  );

export default ChatReducer$