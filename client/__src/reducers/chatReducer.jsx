import {Observable} from "rxjs";
import 'rxjs/add/observable/dom/ajax';
import ChatActions from "../actions/chat-actions";

const initialState = {id: 1, enterToSend: true, messages: [{"id":"d1d3630e-9d3d-4421-8fb2-f73ef861d2f1","timeStamp":1478905399256,"message":"lorem ipsum"}]};
const ChatReducer$ = Observable.of(() => initialState)
  .merge(
    ChatActions.fetch$.switchMap(threadId => 
      Observable.ajax.getJSON(`http://localhost:3090/messages/${threadId}`)
      .map(value => value)
      .catch(({xhr}) => Observable.of(`Bad Promise:${xhr.response.message}`))
    ).map(data => state => Object.assign({}, state, data)),

    ChatActions.postMessage$.map(_payload => _state => initialState),
    ChatActions.keypress$.filter(e => state => { console.log(e, state); return state.enterToSend && e.key === 'Enter';})
      .map(e => state => Object.assign({}, state, {inputValue: e.target.value})),
    
    ChatActions.enterToSend$.map(_payload => state => Object.assign({}, state, {enterToSend:!state.enterToSend}))
  );

export default ChatReducer$;