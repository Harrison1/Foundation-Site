import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const app = document.getElementById('app');
ReactDOM.render(<App feature="../../api/newest-products-data.json" />, app);