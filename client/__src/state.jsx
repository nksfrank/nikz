import Observable from 'rxjs/Observable';
import createState from 'app/rx-state/createState';
import ChatReducer$ from 'app/reducers/ChatReducer';
import http from 'app/service/http';

const reducer$ = Rx.Observable.merge(
  ChatReducer$
);

const initialState$ = Observable.of({
  conversations: []
});

export default createState(reducer$, initialState$);