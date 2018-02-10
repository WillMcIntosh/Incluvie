import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Rating from './Rating';

class App extends Component {
  constructor() {
    super();
    this.state = {
      numberOfStars: {}
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Test Ratings Component</h1>
        </header>
        <Rating 
          numberOfStars={3}
        />
      </div>
    );
  }
}

export default App;
