import 'babel-polyfill';
import { render } from 'react-dom';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './main.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// The main component of the application
render(
  <Router history={browserHistory} routes={routes} />
  ,document.getElementById('container'));
