import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

import App from './components/App';
import Shop from './components/Shop';

const app = document.getElementById('app');
ReactDOM.render((
  				<Router history={browserHistory}>
    				<Route path="/" component={App}/>
    				<Route path="/shop" component={Shop}/>
  				</Router>
				), app);
