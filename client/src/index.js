import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import uiReducer from './store/reducers/uiReducer';
import toursReducer from './store/reducers/toursReducer';
import userReducer from './store/reducers/userReducer';
import citiesReducer from './store/reducers/citiesReducer';


const reducer = combineReducers({
  uiReducer: uiReducer,
  userReducer: userReducer,
  toursReducer: toursReducer,
  citiesReducer: citiesReducer

});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware( thunk)));

ReactDOM.render( <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export default store;