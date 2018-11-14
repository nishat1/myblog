import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
      </Router>
    );
  }
}

export default App;
