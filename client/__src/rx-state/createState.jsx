import Rx from 'rxjs/Rx';

function createState(reducer$, initialState$ = Rx.Observable.of({})) {
	return initialState$
		.merge(reducer$)
		.scan((state, [scope, reducer]) => 
      ({ ...state, [scope]: reducer(state[scope])}))
		.publishReplay(1)
		.refCount();
}

export default createState;