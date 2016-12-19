import React, { Component } from 'react';
import './App.css';
import Players from './containers/Players';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Frank2</h2>
        </div>
        <Players />
      </div>
    );
  }
}

export default App;
