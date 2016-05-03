import React from 'react';

export default class extends React.Component{
	render() {
		return (
			<div class="callout large secondary">
				<div class="row">
					<div class="large-4 columns">
						<h5>Harry's Game Site</h5>
						<p>The best place to game</p>
					</div>
					<div class="large-3 large-offset-2 columns">
						<ul class="menu vertical">
						<li><a href="#">Shop</a></li>
						<li><a href="#">Talk</a></li>
						<li><a href="#">Show</a></li>
						<li><a href="#">Games</a></li>
						</ul>
					</div>
					<div class="large-3 columns">
						<ul class="menu vertical">
						<li><a href="#">Forum</a></li>
						<li><a href="#">Contact</a></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}