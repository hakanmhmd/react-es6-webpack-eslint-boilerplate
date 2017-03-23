import React from 'react';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

// The main component of the application
render(
    <Router >
        <Route path='/' component={ App }>
            <Route path="home" component={ Home } />
            <Route path='about' component={ About } />
        </Route>
    </Router>,
    document.getElementById('container'));
