import React, { Component } from 'react';
import { Link } from 'react-router';

// Sample app to start with
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default App;
