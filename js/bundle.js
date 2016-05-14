import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const data = [
    {
        "id": 1,
        "img": "./img/uncharted.png",
        "title": "Uncharted 4",
        "price": "$59"
    },
    {
        "id": 2,
        "img": "./img/metal.png",
        "title": "Metal Gear Solid",
        "price": "$59"
    },
    {
        "id": 3,
        "img": "./img/sky.png",
        "title": "No Man's Sky",
        "price": "$59"
    },
    {
        "id": 4,
        "img": "./img/realm.png",
        "title": "A Realm Reborn",
        "price": "$59"
    }
];

const app = document.getElementById('app');
ReactDOM.render(<App data={data} />, app);