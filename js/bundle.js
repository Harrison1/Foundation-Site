import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const app = document.getElementById('app');
ReactDOM.render(<App feature="../../api/feature-products-data.json"  newest="../../api/newest-games.json"  hardware="../../api/hardware-data.json" controller="../../api/controller-data.json" accessories="../../api/accessories-data.json" />, app);