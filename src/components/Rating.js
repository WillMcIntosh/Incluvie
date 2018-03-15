import React from 'react';
import RatingStars from 'react-rating';

class Rating extends React.Component {

  render() {
    return (
      <div className="rating-wrap">
        <h2>Your rating: {this.props.numberOfStars}</h2>
        <RatingStars
          start={0}
          stop={-5}
          step={-1}
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x red-star"
          initialRating={this.props.numberOfStars}
          direction={'rtl'}
          onChange={this.props.onChangeRating}
          readonly={this.props.readOnly}
        />
        <RatingStars
          start={-1}
          stop={5}
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol={['fa fa-star fa-2x yellow-star','fa fa-star fa-2x green-star','fa fa-star fa-2x green-star','fa fa-star fa-2x green-star','fa fa-star fa-2x green-star','fa fa-star fa-2x green-star']}
          initialRating={this.props.numberOfStars}
          onChange={this.props.onChangeRating}
          readonly={this.props.readOnly}
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
