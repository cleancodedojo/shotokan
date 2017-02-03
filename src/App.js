import React, { Component } from 'react';
import logo from './images/jka-logo.png';
import ShotokanPage from "./ShotokanPage";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Shotokan Karate</h1>
        </div>
        <ShotokanPage />
      </div>
    );
  }
}

export default App;
