import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import './style.scss';

import reducers from './reducers';
import { ActionTypes } from './actions';

import App from './components/app';

const store = createStore(reducers, {}, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: ActionTypes.AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main'),
);
