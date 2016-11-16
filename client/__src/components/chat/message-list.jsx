import React, {Component, PropTypes} from 'react';
import MessageItem from './message-item';

require('./message-list.scss');

class MessageList extends Component {
	static propTypes = {
		messages: PropTypes.arrayOf(PropTypes.shape({
			sender: PropTypes.string,
			date: PropTypes.string,
			message: PropTypes.string,
		})).isRequired
	}

	componentDidMount() {
		this.scrollToBottom();
	}
	componentDidUpdate() {
		this.scrollToBottom();
	}

	scrollToBottom() {
  	this._list.scrollTop = this._list.scrollHeight;
	}

	render() {
		let {messages} = this.props;
		return(
			<div className="message-list" ref={(c) => {this._list = c}}>
				<ul>
					{messages.map((message) => {
						return <MessageItem key={message.id} item={message} />
					})}
				</ul>
			</div>
		);
	}
}

export default MessageList;