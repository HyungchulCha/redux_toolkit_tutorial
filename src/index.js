import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './common/store';
import Friend from './friend/Friend';

ReactDOM.render(
  <Provider store={store}>
    <Friend />
  </Provider>,
  document.getElementById('root')
);
