import React, {Component} from 'react';

export default class Inputbox extends Component {
	constructor(props) {
		super(props);
	}

	render()  {
		const {...props} = this.props;
		return (
			<div>
				<input {...props} />
			</div>
		);
	}
}