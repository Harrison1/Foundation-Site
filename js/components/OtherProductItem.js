import React from 'react';

export default class extends React.Component{
	render() {
		return (
				<div class="media-object">
					<div class="media-object-section">
						<img class="thumbnail lazy" src={this.props.promoimg} />
					</div>
					<div class="media-object-section">
						<h5>{this.props.title}</h5>
						<p>{this.props.description}</p>
					</div>
				</div>
		);
	}
}