


//import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
//import '../sass/style.scss';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}

