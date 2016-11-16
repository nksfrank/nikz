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

	handleSendClick = (e) => ChatActions.send$.next({conversation: this.props.conversation, e});
	// 	if(this.state.message == undefined || this.state.message === '') {
	// 		return
	// 	}
	// 	let txt = this.state.message;
	// 	 TODO: send message to backend 

	// 	this.setState({message: ''});
	// 	this.setState({dirty: false});
	// 	this.setInputFocus();
	// 	this.props.onSendClick(txt)
	// }

	setInputFocus() {
		this._input.focus();
	}

	handleBlur = () => this.setState({dirty: true});
	handleChange = (e) => ChatActions.keypress$.next(e);
	changeOnEnter = () => ChatActions.enterToSend$.next();

	render() {
		let {conversation} = this.props;
		let btnSend = (<div className="messageSendButton"><button disabled={conversation.enterToSend} onClick={this.handleSendClick} className={`${conversation.enterToSend ? 'disabled': ''} button confirm`}>Send</button></div>);

		return (
			<div className="message-input container" onBlur={this.handleBlur}>
				<div className="segments">
					<div className="segment inputbox">
						<textarea autoFocus rows="3" value={conversation.inputValue} ref={(c) => this._input = c} onChange={this.handleChange}></textarea>
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
