import PropTypes from "prop-types";
import React from "react";

const RatingInput = (props) => {
  const {number, isDisabled} = props;
  return (
    <React.Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={number} id={`${number}-stars`} type="radio" disabled={isDisabled}/>
      <label htmlFor={`${number}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
};

RatingInput.propTypes = {
  number: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool,
};

export default RatingInput;
