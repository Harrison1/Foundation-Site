import React from 'react';
import OtherProductItem from './OtherProductItem';


export default class extends React.Component{
	render() {
				const hardwareNodes = this.props.datahardware.map(function(hardware) {
      				return (
        				<OtherProductItem title={hardware.title} key={hardware.id} promoimg={hardware.img} description={hardware.description} />
      				);
    			});
    			
    			const controllerNodes = this.props.datacontroller.map(function(controller) {
      				return (
        				<OtherProductItem title={controller.title} key={controller.id} promoimg={controller.img} description={controller.description} />
      				);
    			});

    			const accessoriesNodes = this.props.dataaccessories.map(function(accessories) {
      				return (
        				<OtherProductItem title={accessories.title} key={accessories.id} promoimg={accessories.img} description={accessories.description} />
      				);
    			});

		return (
			<div class="row">
				<div class="medium-4 columns">
					<h4>Hardware</h4>
					{hardwareNodes}
				</div>

				<div class="medium-4 columns">
					<h4>Controllers</h4>
					{controllerNodes}
				</div>

				<div class="medium-4 columns">
					<h4>Accessories</h4>
					{accessoriesNodes}
				</div>
			</div>
		);
	}
}