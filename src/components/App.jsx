import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Sample app to start with
class App extends Component {
  render() {
    return (
      <div>
        <h1> App </h1>
        <div className='App'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>

        </div>
      </div>
    );
  }
}

export default App;
