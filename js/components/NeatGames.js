import React from 'react';
import NeatGameItem from './NeatGameItem'

export default class extends React.Component{
	render() {
		const neatNodes = this.props.data.map(function(newest) {
      		return (
        				<NeatGameItem title={newest.title} key={newest.id} promoimg={newest.img} price={newest.price} />
      				);
    	});
		return (
			<div class="row small-up-2 medium-up-3 large-up-6">
				{neatNodes}
				<hr />
			</div>
		);
	}
}