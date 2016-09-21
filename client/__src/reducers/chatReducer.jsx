import Observable from 'rxjs/Observable';
import ChatActions from '../actions/chat-actions';

const ChatReducer$ = Observable.merge(
  ChatActions.fetchConversation$
    .flatMap(conversationId => http.get(`/messages/${conversationId}`))
    .map(data => state => ({...state, conversationThread: data}))
);