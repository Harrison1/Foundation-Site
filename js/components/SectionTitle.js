import React from 'react';

export default class extends React.Component{
	render() {
		return (
			<div class="row column text-center">
				<h2>{this.props.title}</h2>
				<hr />
			</div>
		);
	}
}
