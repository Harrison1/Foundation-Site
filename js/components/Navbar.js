import React from 'react';
import { Link } from 'react-router';

import 'script!jquery';
import Lazy from 'lazyload/jquery.lazyload';
import Main from '../../public/js/main';

export default class extends React.Component {
  render() {

    return (
			<div>
				<div class="title-bar" data-responsive-toggle="main-menu" data-hide-for="medium">
					<button class="menu-icon" type="button" data-toggle></button>
				<div class="title-bar-title">Menu</div>
				</div>

				<div class="top-bar" id="main-menu">
					<div class="row">
						<div class="top-bar-left">
							<ul class="dropdown menu" data-dropdown-menu>
							<li class="menu-text">Harry's Game Site</li>
							</ul>
						</div>
						<div class="top-bar-right">
							<ul class="menu" data-responsive-menu="drilldown medium-dropdown">
							<li><Link to="/shop" activeStyle={{ color: 'red' }}>Shop</Link></li>
							<li><a href="#">Talk</a></li>
							<li><a href="#">Show</a></li>
							<li><a href="#">Games</a></li>
							<li><a href="#">Forum</a></li>
							<li><a href="#">Contact</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

