import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Rating from './Rating';

class App extends Component {
  constructor() {
    super();
    this.onChangeRating = this.onChangeRating.bind(this);
    this.state = {
      numberOfStars: 0,
      displayStars: 6
    };
  }

  onChangeRating = (newRating) => {
    const numberOfStars = newRating -6;
    console.log(numberOfStars);
    this.setState({ numberOfStars, 
    displayStars: newRating });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Test Ratings Component</h1>
        </header>
        <Rating 
          numberOfStars={this.state.numberOfStars}
          displayStars={this.state.displayStars}
          onChangeRating={this.onChangeRating}
        />
      </div>
    );
  }
}

export default App;
