import Rx from 'rxjs';

function createState(reducer$, initialState = Rx.Observable.of({})) {
	return Rx.Observable
		.merge(reducer$)
		.scan((state, reducer) => reducer(state))
		.startWith(initialState)
		.publishReplay(1)
		.refCount();
}

export default createState;