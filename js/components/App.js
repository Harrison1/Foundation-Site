import React from 'react';
import Home from './Home';

export default class extends React.Component{
	render() {
		return (
  				<Home feature="../../api/feature-products-data.json"  newest="../../api/newest-games.json"  hardware="../../api/hardware-data.json" controller="../../api/controller-data.json" accessories="../../api/accessories-data.json" />
		);
	}
}
