import Adapter from "enzyme-adapter-react-16";
import {Router} from "react-router-dom";
import Enzyme, {mount} from "enzyme";
import * as React from "react";
import history from "../../history";
import FeedbackForm from "./feedback-form";

Enzyme.configure({
  adapter: new Adapter(),
});

const feedbackFormStatus = ``;
const hotelId = ``;

describe(`ReviewForm works correctly`, () => {
  it(`When submit review info - onFeedbackSubmit callback is called`, () => {
    const onFeedbackFormChange = jest.fn((args) => args);
    const onSubmitFeedback = jest.fn();

    const reviewForm = mount(
        <Router
          history={history}
        >
          <FeedbackForm
            onSubmitFeedback={onSubmitFeedback}
            hotelId={hotelId}
            feedbackFormStatus={feedbackFormStatus}
            onFeedbackFormChange={onFeedbackFormChange}
            feedbackSubmitBtnStatus={true}
          />
        </Router>);

    const form = reviewForm.find(`form`);
    form.simulate(`submit`);

    expect(onSubmitFeedback).toHaveBeenCalledTimes(1);
  });

  it(`When add review info - onFeedbackFormChange callback is called`, () => {
    const onFeedbackFormChange = jest.fn((args) => args);
    const onSubmitFeedback = jest.fn();

    const reviewForm = mount(
        <Router
          history={history}
        >
          <FeedbackForm
            onSubmitFeedback={onSubmitFeedback}
            hotelId={hotelId}
            feedbackFormStatus={feedbackFormStatus}
            onFeedbackFormChange={onFeedbackFormChange}
            feedbackSubmitBtnStatus={true}
          />
        </Router>);

    const form = reviewForm.find(`textarea`);
    form.simulate(`change`, {target: {value: `test`}});

    expect(onFeedbackFormChange).toHaveBeenCalledTimes(1);
  });
});
