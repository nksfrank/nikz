import React, {Component, PropTypes} from 'react';
import {Observable} from 'rxjs';

export function createState(reducer$, initialState$ = Observable.of({})) {
  return initialState$
    .merge(reducer$)
    .scan((state, [scope, reducer]) =>
      ({...state, [scope]: reducer(state[scope])}))
    .publishReplay(1)
    .refCount();
}

export function connect(selector = state => state) {
  return function wrapWithConnect(WrappedComponent) {
    return class Connect extends Component {
      static contextTypes = {
        state$: PropTypes.object.isRequired,
      }

      componentWillMount() {
        this.subscription = this.context.state$.map(selector).subscribe(::this.setState);
      }

      componentWillUnmount() {
        this.subscription.unsubscribe();
      }

      render() {
        return (<WrappedComponent {...this.state} {...this.props} />);
      }
    }
  }
}

export class RxStateProvider extends Component {
  static propTypes = {
    state$: PropTypes.object.isRequired
  }

  static childContextTypes = {
    state$: PropTypes.object.isRequired
  }

  getChildcontext() {
    return { state$: this.props.state$}
  }

  render() {
    return this.props.children;
  }
}