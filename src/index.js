import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

/* Acces to redux */
import {Provider} from 'react-redux';
//store - storing all actions from our user
import store from './redux/store';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <Provider store={store}>        
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));