import PropTypes from "prop-types";
import React, {createRef} from "react";

import RatingInput from "../rating-input/rating-input.jsx";

const feedbackPoints = [5, 4, 3, 2, 1];

const FeedbackForm = (props) => {
  const {onSubmitFeedback, hotelId, feedbackFormStatus = ``} = props;
  const isDisabled = feedbackFormStatus === `disabled`;
  const feedbackFormStatusOutput = feedbackFormStatus !== `disabled` ? feedbackFormStatus : ``;
  const feedbackFormRef = createRef();

  const ratingsInputList = feedbackPoints.map((index) => {
    return (
      <RatingInput
        number={index}
        key={`${index}Points`}
        isDisabled={isDisabled}
      />
    );
  });

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    const {rating, review} = feedbackFormRef.current;

    onSubmitFeedback(hotelId, {
      rating: rating.value,
      comment: review.value,
    });

    feedbackFormRef.current.reset();
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmitForm}
      ref={feedbackFormRef}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingsInputList}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" disabled={isDisabled} defaultValue={feedbackFormStatusOutput}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
};

FeedbackForm.propTypes = {
  onSubmitFeedback: PropTypes.func.isRequired,
  hotelId: PropTypes.string.isRequired,
  feedbackFormStatus: PropTypes.string
};

export default FeedbackForm;
