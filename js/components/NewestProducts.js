import React from 'react';
import FeatureProduct from './FeatureProduct';

export default class extends React.Component{
	render() {
		const featureNodes = this.props.data.map(function(data) {
      		return (
        				<FeatureProduct title={data.title} key={data.id} promoimg={data.img}/>
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