import React, {Component, PropTypes} from 'react';
import ChatActions from 'app/actions/chat-actions';
import {connect} from 'app/state/RxState';
import Rx from 'rxjs';

require('./message-inputbox.scss');
require('../../styles/segments.scss');

class MessageBox extends Component {
	componentDidMount() {
    this.setInputFocus();
	}

	setInputFocus() {
		this._input.focus();
	}

	handleSend = (e) => ChatActions.send$.next({conversation: this.props.conversation, e});
	handleChange = (e) => {ChatActions.keypress$.next({conversation: this.props.conversation, e})};
	changeOnEnter = () => ChatActions.enterToSend$.next();

	render() {
		let {conversation} = this.props;
		let btnSend = (<div className="messageSendButton"><button disabled={conversation.enterToSend} onClick={this.handleSend} className={`${conversation.enterToSend ? 'disabled': ''} button confirm`}>Send</button></div>);
		return (
			<div className="message-input container">
				<div className="segments">
					<div className="segment inputbox">
						<textarea autoFocus rows="3" value={conversation.inputValue} ref={(c) => this._input = c} onChange={this.handleChange} onKeyPress={this.handleSend}></textarea>
					</div>
					<div className="segment toolbar">
						<div></div>
						<div className="rightTools">
							<a href="#" onClick={this.changeOnEnter} className="sendCheckbox">
								<span>Send on Enter</span>
								<input name="cbEnterToSend" type="checkbox" readOnly checked={conversation.enterToSend} />
							</a>
							{btnSend}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default connect(state => ({
	conversation: state.chat,
}))(MessageBox);
