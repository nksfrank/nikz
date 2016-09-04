import React, {Component, PropTypes} from 'react';
import {noop} from '../../util/helper';

require('./message-inputbox.scss');
require('../../styles/segments.scss');

class MessageBox extends Component {
	static propTypes = {
		message: PropTypes.string,
		onSendClick: PropTypes.func
	}

	static defaultProps = {
		dirty: false,
		message: '',
		enterToSend: true
	}

	constructor(props) {
		super(props);
    this.state = this.props;
	}

	componentDidMount() {
	    this.setInputFocus();
	}

	handleSendClick() {
		if(this.state.message == undefined || this.state.message === '') {
			return
		}
		let txt = this.state.message;
		/* TODO: send message to backend */

		this.setState({message: ''});
		this.setState({dirty: false});
		this.setInputFocus();
		this.props.onSendClick(txt)
	}

	setInputFocus() {
		this._input.focus();
	}

	handleBlur() {
		this.setState({dirty: true});
	}

	handleKeyPress(e) {
		if(this.state.enterToSend && !e.shiftKey && e.key === 'Enter') {
			e.preventDefault();
			this.handleSendClick();
			return;
		}
	}
	handleChange(e) {
		this.setState({dirty: true, message: e.target.value});
	}

	changeOnEnter() {
		this.setState({enterToSend: !this.state.enterToSend})
	}

	render() {
		let btnSend = (<div className="messageSendButton"><button disabled={this.state.enterToSend} onClick={() => {this.handleSendClick()}} className={`${this.state.enterToSend ? 'disabled': ''} button confirm`}>Send</button></div>);

		return (
			<div className="message-input container" onBlur={() => this.handleBlur()}>
				<div className="segments">
					<div className="segment inputbox">
						<textarea rows="3" value={this.state.message} ref={(c) => this._input = c} onKeyPress={(e) => this.handleKeyPress(e)} onChange={(e) => this.handleChange(e)}></textarea>
					</div>
					<div className="segment toolbar">
						<div></div>
						<div className="rightTools">
							<a href="#" onClick={() => this.changeOnEnter()} className="sendCheckbox">
								<span>Send on Enter</span>
								<input name="cbEnterToSend" type="checkbox" checked={this.state.enterToSend} />
							</a>
							{btnSend}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MessageBox;