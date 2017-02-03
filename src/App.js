import React, { Component } from 'react';
import logo from './jka-logo.png';
import './App.css';
import ShotokanPage from "./ShotokanPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Shotokan</h2>
        </div>
        <ShotokanPage />
      </div>
    );
  }
}

export default App;
