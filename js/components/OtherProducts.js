import React from 'react';

export default class extends React.Component{
	render() {
		return (
			<div class="row">
				<div class="medium-4 columns">
					<h4>Hardware</h4>
					<div class="media-object">
						<div class="media-object-section">
							<img class="thumbnail lazy" data-original="./img/ps4b.png" />
						</div>
						<div class="media-object-section">
							<h5>PS4</h5>
							<p>Experience what everyone is talking about</p>
						</div>
					</div>
					<div class="media-object">
						<div class="media-object-section">
							<img class="thumbnail lazy" data-original="./img/ps4w.png" />
						</div>
						<div class="media-object-section">
							<h5>PS4/White</h5>
							<p>Change the color for the same great experience</p>
						</div>
					</div>
					<div class="media-object">
						<div class="media-object-section">
							<img class="thumbnail lazy" data-original="./img/psvr.png" />
						</div>
						<div class="media-object-section">
							<h5>Playstation VR</h5>
							<p>A whole new way to game</p>
						</div>
					</div>
				</div>

				<div class="medium-4 columns">
					<h4>Controllers</h4>
					<div class="media-object">
						<div class="media-object-section">
							<img class="thumbnail lazy" data-original="./img/contb.png" />
						</div>
						<div class="media-object-section">
							<h5>PS4 Controller</h5>
							<p>The classic PS4 controller</p>
						</div>
					</div>
					<div class="media-object">
						<div class="media-object-section">
							<img class="thumbnail lazy" data-original="./img/contw.png" />
						</div>
						<div class="media-object-section">
							<h5>PS4 Controller/White</h5>
							<p>Change the color for the same great experience</p>
						</div>
					</div>
					<div class="media-object">
						<div class="media-object-section">
							<img class="thumbnail lazy" data-original="./img/move.png" />
						</div>
						<div class="media-object-section">
							<h5>PS Move Controller</h5>
							<p>Prepare yourself for Playstation VR</p>
						</div>
					</div>
				</div>

				<div class="medium-4 columns">
					<h4>Accessories</h4>
					<div class="media-object">
						<div class="media-object-section">
							<img class="thumbnail lazy" data-original="./img/headphones.png" />
						</div>
						<div class="media-object-section">
							<h5>Headphones</h5>
							<p>Hear what everyone is saying. Don't go at it alone</p>
						</div>
					</div>
					<div class="media-object">
						<div class="media-object-section">
							<img class="thumbnail lazy" data-original="./img/cable.png" />
						</div>
						<div class="media-object-section">
							<h5>PS4 Cable</h5>
							<p>It broke, we know, buy a replacement now</p>
						</div>
					</div>
					<div class="media-object">
						<div class="media-object-section">
							<img class="thumbnail lazy" data-original="./img/hdmi.png" />
						</div>
						<div class="media-object-section">
							<h5>HDMI Cable</h5>
							<p>Another overpriced HDMI cable, we know, buy ours, we both know you need one.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}