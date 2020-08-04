import * as React from "react";

interface Props {
  number: number;
  isDisabled: boolean;
  onRatingChange: (evt) => void;
}

const RatingInput: React.FunctionComponent<Props> = (props: Props) => {
  const {number, isDisabled, onRatingChange} = props;
  return (
    <React.Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={number}
        id={`${number}-stars`}
        type="radio"
        disabled={isDisabled}
        onChange={onRatingChange}
      />
      <label htmlFor={`${number}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
};

export default RatingInput;
