import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';

// The main component of the application
render(
  <Router >
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>,
    document.getElementById('container'));
