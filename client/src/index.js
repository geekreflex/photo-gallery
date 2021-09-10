import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import { getTokenFromStorage, getUserProfileAsync } from './redux/userSlice';

store.dispatch(getTokenFromStorage());
store.dispatch(getUserProfileAsync());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
