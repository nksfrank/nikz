import Rx from 'rxjs/Rx';

const ChatActions = {
  fetchConversation$: new Rx.Subject(),
  postMessage$: new Rx.Subject(),
}

export default ChatActions;