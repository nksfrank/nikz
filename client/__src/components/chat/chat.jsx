import React, {Component, PropTypes} from 'react';
import ChatHeader from './chat-header';
import MessageList from './message-list';
import MessageItem from './message-item';
import MessageInputbox from './message-inputbox';

require('./chat.scss');

class Chat extends Component {
	static propTypes = {
		messages: PropTypes.arrayOf(PropTypes.shape({
			sender: PropTypes.string,
			date: PropTypes.string,
			message: PropTypes.string,
		}))
	}
 	
 	static defaultProps = {
 		messages: [
 			{
 				id:5,
	 			sender: "nf",
				date: "1min",
				message: `a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
dated
dated
dated

a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a
a`
			},
 			{
 				id:0,
	 			sender: "nf",
				date: "1min",
				message: "dadada",
			},
 			{
 				id:1,
	 			sender: "nf",
				date: "1min",
				message: "dadada",
			},
 			{
 				id:2,
	 			sender: "nf",
				date: "1min",
				message: "dadada",
			},
 			{
 				id:3,
	 			sender: "nf",
				date: "1min",
				message: "dadada",
			},
 			{
 				id:4,
	 			sender: "nf",
				date: "1min",
				message: "dadada",
			}
 		]
 	}
	constructor(props) {
		super(props);
		this.state = this.props;
	}

	handleSubmit(txt) {
		let msg = {sender:'', date:'', message:txt}
		this.setState({messages: [...this.state.messages, msg]})
	}

	render() {
		let {className, ...props} = this.props;
		return(
			<div className="chat fullsize">
					<ChatHeader />
					<MessageList messages={this.state.messages} />
					<MessageInputbox onSendClick={(txt) => {this.handleSubmit(txt)}} />
			</div>
		);
	}
}

export default Chat;