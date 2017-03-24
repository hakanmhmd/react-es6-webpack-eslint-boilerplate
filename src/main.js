import 'babel-polyfill';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// The main component of the application
console.log('lalalla')
render(
  <Router history={browserHistory} routes={routes} />
  ,document.getElementById('container'));
