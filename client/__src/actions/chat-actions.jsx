import {Subject, BehaviorSubject} from "rxjs/Rx";

const ChatActions = {
  fetchConversation$: new Subject(),
  postMessage$: new Subject(),
}

export default ChatActions;