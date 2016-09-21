import Rs from 'rxjs';
import createState from 'app/rx-state/createState';
import ChatReducer$ from 'app/reducers/ChatReducer';
import http from 'app/service/http';

const reducer$ = Rs.Observable.merge(
  ChatReducer$
);

const initialState$ = Rs.Observable.of({
  conversations: [],
  conversationThread: []
});

export default createState(reducer$, initialState$);