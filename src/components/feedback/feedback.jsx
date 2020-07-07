import PropTypes from "prop-types";
import React from "react";

import {RATING_IN_WIDTH_PERCENT, MONTHS} from "../../const.js";

const Feedback = (props) => {
  const {review} = props;
  const reviewRatingStyleWidth = `${review.assessment * RATING_IN_WIDTH_PERCENT}%`;
  const reviewDate = `${MONTHS[review.date.getMonth()]} ${review.date.getDate()}, ${review.date.getFullYear()}`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: reviewRatingStyleWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime={reviewDate}>{reviewDate}</time>
      </div>
    </li>
  );
};

Feedback.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    assessment: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.date
  }).isRequired
};

export default Feedback;
