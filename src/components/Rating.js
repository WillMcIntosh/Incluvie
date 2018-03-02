import React from 'react';
import RatingStars from 'react-rating';

class Rating extends React.Component {

  render() {
    return (
      <div className="rating-wrap">
        <h2>Your rating: {this.props.numberOfStars}</h2>
        <RatingStars
          start={1}
          stop={-5}
          step={-1}
          initialRating={this.props.numberOfStars}
          direction={'rtl'}
          onChange={this.props.onChangeRating}
        />
        <RatingStars />
      </div>
    )
  }
}

Rating.propTypes = {
  // onChangeRating: React.PropTypes.func.isRequired,
  // numberOfStars: React.PropTypes.number

}

export default Rating;
