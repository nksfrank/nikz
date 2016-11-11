import React, {Component, PropTypes} from 'react';

export default function connect(selector = state => state) {
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
				return(
					<WrappedComponent {...this.state} {...this.props} />
				);
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

	getChildContext() {
		return { state$: this.props.state$}
	}

	render() {
		return this.props.children;
	}
}