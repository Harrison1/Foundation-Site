import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const app = document.getElementById('app');
ReactDOM.render(<App url="../../api/newest-products-data.json" />, app);