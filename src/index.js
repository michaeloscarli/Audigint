import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './state/reducers';

import './index.css';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
 document.getElementById('root')
);
