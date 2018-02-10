import React from 'react';
import ReactStars from 'react-stars';

class Rating extends React.Component {
  constructor() {
    super();
    this.onChangeRating = this.onChangeRating.bind(this);
    this.state = {
      numberOfStars: 0
    }
  }

  onChangeRating = (newRating) => {
    const correctRating = newRating -6;
    console.log(correctRating);
    // this.setState({ numberOfStars: correctRating });
  }

  render() {
    return (
      <div className="rating-wrap">
        <h2>Your rating: {this.props.numberOfStars}</h2>
        <ReactStars
          count={11}
          value={6}
          half={false}
          edit={true}
          size={24}
          color2={'#ffd700'}
          onChange={this.onChangeRating}
        />
      </div>
    )
  }
}

Rating.propTypes = {
  // onChangeRating: React.PropTypes.func.isRequired,
  // numberOfStars: React.PropTypes.number

}

export default Rating;
