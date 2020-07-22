import PropTypes from "prop-types";
import React from "react";

import {RATING_IN_WIDTH_PERCENT, MONTHS} from "../../const.js";

const Feedback = (props) => {
  const {feedback} = props;
  const feedbackDate = new Date(feedback.date);
  const reviewRatingStyleWidth = `${feedback.rating * RATING_IN_WIDTH_PERCENT}%`;
  const reviewDate = `${MONTHS[feedbackDate.getMonth()]} ${feedbackDate.getDate()}, ${feedbackDate.getFullYear()}`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`${feedback.user.avatar_url}`} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {feedback.user.name}
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
          {feedback.comment}
        </p>
        <time className="reviews__time" dateTime={reviewDate}>{reviewDate}</time>
      </div>
    </li>
  );
};

Feedback.propTypes = {
  feedback: PropTypes.shape({
    comment: PropTypes.string,
    rating: PropTypes.number,
    user: PropTypes.shape({
      name: PropTypes.string,
      avatar_url: PropTypes.string,
      id: PropTypes.number,
      is_pro: PropTypes.bool,
    }),
    date: PropTypes.date,
    id: PropTypes.number,
  })
};

export default Feedback;
