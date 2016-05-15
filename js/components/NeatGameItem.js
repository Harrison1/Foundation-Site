import React from 'react';

export default class extends React.Component{
	render() {
		return (
				<div class="column">
					<img class="thumbnail lazy" src={this.props.promoimg} />
					<h5>{this.props.title}</h5>
					<p>{this.props.price}</p>
					<a href="#" class="button small expanded hollow">Buy</a>
				</div>
		);
	}
}