import React from 'react';
import ReactStars from 'react-stars';

class Rating extends React.Component {

  render() {
    return (
      <div className="rating-wrap">
        <h2>Your rating: {this.props.numberOfStars}</h2>
        <ReactStars
          count={11}
          value={this.props.displayStars}
          half={false}
          edit={true}
          size={24}
          color2={'#ffd700'}
          onChange={this.props.onChangeRating}
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
