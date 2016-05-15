import React from 'react';
import ShopPage from './ShopPage';

export default class extends React.Component{
	render() {
		return (
  				<ShopPage data="../../api/shop.json" />
		);
	}
}