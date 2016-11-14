import React, {Component, PropTypes} from 'react';
import ChatActions from 'app/actions/chat-actions';
import {connect} from 'app/state/RxState';
import ChatHeader from './chat-header';
import MessageList from './message-list';
import MessageItem from './message-item';
import MessageBox from './message-inputbox';

require('./chat.scss');

class Chat extends Component {
	static propTypes = {
		conversation: PropTypes.object,
	}

	static defaultProps = {
		conversation: {
			messages: []
		}
	}

	componentWillMount() {
  	this.props.fetchConversation(1);
	}

	render() {
		return(
			<div className="chat fullsize">
					<ChatHeader />
					<MessageList messages={this.props.conversation.messages} />
					<MessageBox />
			</div>
		);
	}
}

export default connect(state => ({
	conversation: state.chat,
  fetchConversation(threadId) { ChatActions.fetch$.next(threadId); },
}))(Chat);