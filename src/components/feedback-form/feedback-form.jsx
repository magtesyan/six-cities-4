import PropTypes from "prop-types";
import React, {createRef} from "react";

import RatingInput from "../rating-input/rating-input.jsx";

const feedbackPoints = [5, 4, 3, 2, 1];

const FeedbackForm = (props) => {
  const {onSubmitFeedback, hotelId, feedbackFormStatus = ``, onFeedbackFormChange, feedbackSubmitBtnStatus = false} = props;
  let isDisabled = feedbackFormStatus === `disabled`;
  const feedbackFormStatusOutput = feedbackFormStatus !== `disabled` ? feedbackFormStatus : ``;
  const feedbackFormRef = createRef();

  const error = (feedbackFormStatus !== `` && feedbackFormStatus !== `disabled`) ? `Server error` : ``;

  const ratingsInputList = feedbackPoints.map((index) => {
    return (
      <RatingInput
        number={index}
        key={`${index}Points`}
        isDisabled={isDisabled}
      />
    );
  });

  const handleChangeForm = () => {
    const {rating, review} = feedbackFormRef.current;
    const isFormRequirementsOk = (rating.value && review.value.length >= 50 && review.value.length <= 300);

    return isFormRequirementsOk ? onFeedbackFormChange(false) : onFeedbackFormChange(true);
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    const {rating, review} = feedbackFormRef.current;

    onSubmitFeedback(hotelId, {
      rating: rating.value,
      comment: review.value,
    });

    onFeedbackFormChange(true);
    feedbackFormRef.current.reset();
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmitForm}
      ref={feedbackFormRef}
      onChange={handleChangeForm}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingsInputList}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" disabled={isDisabled} defaultValue={feedbackFormStatusOutput}></textarea>
      <div style={{fontSize: `20px`, color: `red`}}>
        {error}
      </div>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={feedbackSubmitBtnStatus}>Submit</button>
      </div>
    </form>
  );
};

FeedbackForm.propTypes = {
  onSubmitFeedback: PropTypes.func.isRequired,
  hotelId: PropTypes.string,
  feedbackFormStatus: PropTypes.string,
  onFeedbackFormChange: PropTypes.func.isRequired,
  feedbackSubmitBtnStatus: PropTypes.bool.isRequired,
};

export default FeedbackForm;
