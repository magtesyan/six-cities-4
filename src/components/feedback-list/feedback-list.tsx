import * as React from "react";
import Feedback from "../feedback/feedback";
import {FeedbackType} from "../../types";

interface Props {
  feedbacks: FeedbackType[];
}

const FeedbackList: React.FunctionComponent<Props> = (props: Props) => {
  const {feedbacks} = props;
  const sortedFeedbacks = feedbacks.sort((a, b) => +(new Date(b.date)) - +(new Date(a.date))).slice(0, 10);
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

export default FeedbackList;
