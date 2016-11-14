import {Subject, BehaviorSubject} from "rxjs/Rx";

const ChatActions = {
  fetch$: new Subject(),
  postMessage$: new Subject(),
  keypress$: new BehaviorSubject(),
  send$: new Subject(),
  enterToSend$: new Subject(),
}

export default ChatActions;

// import {createActions} from 'app/state/RxState';

// export default createActions(["fetchConversation$", "postMessage$"])