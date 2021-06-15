import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './common/store';
import Friend from './friend/Friend';
import Timeline from './timeline/Timeline';

ReactDOM.render(
  <Provider store={store}>
    <Friend />
    <Timeline />
  </Provider>,
  document.getElementById('root')
);
