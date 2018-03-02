import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Rating from './Rating';

class App extends Component {
  constructor() {
    super();
    this.onChangeRating = this.onChangeRating.bind(this);
    this.state = {
      numberOfStars: 0 
    };
  }

  onChangeRating(value){
    let numberOfStars = {...this.state.numberOfStars};
    console.log(numberOfStars);
    numberOfStars = value;
    this.setState({ numberOfStars:value 
    });
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
          onChangeRating={this.onChangeRating}
        />
      </div>
    );
  }
}

export default App;
