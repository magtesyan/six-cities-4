import PropTypes from "prop-types";
import React from "react";

import Feedback from "../feedback/feedback.jsx";

const FeedbackList = (props) => {
  const {feedbacks} = props;
  const sortedFeedbacks = feedbacks.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 10);
  const renderReviews = sortedFeedbacks.map((feedback) => {
    return (
      <Feedback
        key={feedback.id}
        feedback={feedback}
      />
    );
  });

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{feedbacks.length}</span></h2>
      <ul className="reviews__list">
        {renderReviews}
      </ul>
    </section>
  );
};

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string,
    rating: PropTypes.number,
    user: PropTypes.shape({
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
      id: PropTypes.number,
      isPro: PropTypes.bool,
    }),
    date: PropTypes.date,
    id: PropTypes.number,
  }))
};

export default FeedbackList;
