import React, {Component, PropTypes} from 'react';

require('./message-item.scss');

class MessageItem extends Component {
	static propTypes = {
		item: PropTypes.shape({
			sender: PropTypes.string,
			date: PropTypes.string,
			message: PropTypes.string
		})
	}

	render() {
		let {item} = this.props;

		return(
			<li>
				<div className="message-item block">
					<div className="date fright">
						{item.date}
					</div>
					<div>
						<strong>{item.sender}</strong>
						<div>
							<p>{item.message}</p>
						</div>
					</div>
				</div>
			</li>
		);
	}
}

export default MessageItem;