import React from 'react';
import FeatureProduct from './FeatureProduct';

export default class extends React.Component{
	render() {
		const featureNodes = this.props.data.map(function(feature) {
      		return (
        				<FeatureProduct title={feature.title} key={feature.id} promoimg={feature.img} price={feature.price} />
      				);
    	});
		return (
			<div class="row small-up-2 large-up-4">
				{featureNodes}
				<hr />
			</div>
		);
	}
}