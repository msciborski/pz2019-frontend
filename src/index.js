import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App/App.jsx';
import { Provider } from "react-redux";
import store from "./store";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();