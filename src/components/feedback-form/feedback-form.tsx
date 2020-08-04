import * as React from "react";
import {FeedbackPostType} from "../../types";
import RatingInput from "../rating-input/rating-input";

interface Props {
  feedbackFormStatus: string;
  feedbackSubmitBtnStatus: boolean;
  hotelId: string;
  onSubmitFeedback: (hotelId: string, feedbackPost: FeedbackPostType) => void;
  onFeedbackFormChange: (boolean) => void;
}

const feedbackPoints = [5, 4, 3, 2, 1];

class FeedbackForm extends React.PureComponent<Props, {}> {
  private feedbackFormRef: React.RefObject<HTMLFormElement>;
  private feedbackText: string;
  private ratingValue: number;
  private isDisabled: boolean;

  constructor(props) {
    super(props);
    this.feedbackFormRef = React.createRef();

    this.feedbackText = ``;
    this.ratingValue = 0;

    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleFeedbackCommentChange = this.handleFeedbackCommentChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  ratingsInputList() {
    return (
      feedbackPoints.map((index) => {
        return (
          <RatingInput
            number={index}
            key={`${index}Points`}
            isDisabled={this.isDisabled}
            onRatingChange={this.handleRatingChange}
          />
        );
      })
    );
  }

  handleRatingChange(evt) {
    this.ratingValue = evt.target.value;
    this.handleChangeForm();
  }

  handleFeedbackCommentChange(evt) {
    this.feedbackText = evt.target.value;
    this.handleChangeForm();
  }

  handleChangeForm() {
    const {onFeedbackFormChange} = this.props;
    const isFormRequirementsOk = (this.ratingValue && this.feedbackText.length >= 50 && this.feedbackText.length <= 300);
    return isFormRequirementsOk ? onFeedbackFormChange(false) : onFeedbackFormChange(true);
  }

  handleSubmitForm(evt) {
    const {onSubmitFeedback, hotelId, onFeedbackFormChange} = this.props;
    evt.preventDefault();

    onSubmitFeedback(hotelId, {
      rating: this.ratingValue,
      comment: this.feedbackText,
    });

    onFeedbackFormChange(true);
    this.feedbackFormRef.current.reset();
  }

  render() {
    const {feedbackFormStatus = ``, feedbackSubmitBtnStatus = false} = this.props;
    const feedbackFormStatusOutput = feedbackFormStatus !== `disabled` ? feedbackFormStatus : ``;
    const error = (feedbackFormStatus !== `` && feedbackFormStatus !== `disabled`) ? `Server error` : ``;
    this.isDisabled = feedbackFormStatus === `disabled`;
    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={this.handleSubmitForm}
        ref={this.feedbackFormRef}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {this.ratingsInputList()}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          disabled={this.isDisabled}
          defaultValue={feedbackFormStatusOutput}
          onChange={this.handleFeedbackCommentChange}
        >
        </textarea>
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
  }
}

export default FeedbackForm;
