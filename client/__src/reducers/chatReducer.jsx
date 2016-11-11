import Rx, {Observable} from 'rxjs/Rx';
import ChatActions from 'app/actions/chat-actions';
import http from 'service/http';

const initialState = {}
const ChatReducer$ = Observable.of(() => initialState)
  .merge(
    ChatActions.fetchConversation$.flatMap(conversationId => http.get(`/messages/${conversationId}`))
      .map(data => state => ({...state, conversationThread: data}))
  );

export default ChatReducer$;