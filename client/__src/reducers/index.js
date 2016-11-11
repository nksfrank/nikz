import Rx from 'rxjs';
import ChatReducer$ from 'app/reducers/chatReducer';

const reducer$ = Rx.Observable.merge(
  ChatReducer$.map(reducer => ["chat", reducer])
);

export default reducer$;