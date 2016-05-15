import React from 'react';
import LazyLoad from 'react-lazyload';

export default class extends React.Component{
	render() {
		return (
				<div class="column">
					<LazyLoad height={224} once>
						<img class="productfade" src={this.props.promoimg} />
					</LazyLoad>	
					<h5>{this.props.title}</h5>
					<p>{this.props.price}</p>
					<a href="#" class="button small expanded hollow">Buy</a>
				</div>
		);
	}
}