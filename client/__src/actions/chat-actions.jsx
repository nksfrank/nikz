import Rx from 'rxjs';

const ChatActions = {
  fetchConversation$: new Rx.BehaviourSubject(),
  postMessage$: new Rx.Subject(),
}

export default ChatActions;