import React from 'react';

export default class extends React.Component{
	render() {
		return (
			<div class="row small-up-2 large-up-4">
				<div class="column">
					<img class="thumbnail lazy" data-original="./img/uncharted.png" />
					<h5>Uncharted 4</h5>
					<p>$59</p>
					<a href="#" class="button expanded">Buy</a>
				</div>
				<div class="column">
					<img class="thumbnail lazy" data-original="./img/metal.png" />
					<h5>Metal Gear Solid</h5>
					<p>$59</p>
					<a href="#" class="button expanded">Buy</a>
				</div>
				<div class="column">
					<img class="thumbnail lazy" data-original="./img/sky.png" />
					<h5>No Man's Sky</h5>
					<p>$59</p>
					<a href="#" class="button expanded">Buy</a>
				</div>
				<div class="column">
					<img class="thumbnail lazy" data-original="./img/realm.png" />
					<h5>A Realm Reborn</h5>
					<p>$59</p>
					<a href="#" class="button expanded">Buy</a>
				</div>
			</div>
		);
	}
}