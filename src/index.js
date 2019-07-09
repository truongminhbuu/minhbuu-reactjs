import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import initFirebase from'./firebaseConfig';
import{ Provider } from'react-redux';
import {store} from'./App.store'

initFirebase()
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


//ReactDOM.render(<ProductList />, document.getElementById('productlist'));
// ReactDOM.render(<CartItem />, document.getElementById('minicart'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
