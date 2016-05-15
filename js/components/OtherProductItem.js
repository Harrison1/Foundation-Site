import React from 'react';

import LazyLoad from 'react-lazyload';

export default class extends React.Component{
	render() {
		return (
				<div class="media-object">
					<div class="media-object-section">
						<LazyLoad height={108} once>
							  <img class="productfade" src={this.props.promoimg} />
						</LazyLoad>	
					</div>
					<div class="media-object-section">
						<h5>{this.props.title}</h5>
						<p>{this.props.description}</p>
					</div>
				</div>
		);
	}
}