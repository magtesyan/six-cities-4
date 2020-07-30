import Adapter from "enzyme-adapter-react-16";
import {Router} from "react-router-dom";
import Enzyme, {mount} from "enzyme";
import React from "react";
import history from "../../history.js";
import FeedbackForm from "./feedback-form.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const feedbackFormStatus = ``;
const hotelId = ``;

describe(`ReviewForm works correctly`, () => {
  it(`When adding review info - onFeedbackFormChange callback is called`, () => {
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

    reviewForm.simulate(`submit`);

    expect(onSubmitFeedback).toHaveBeenCalledTimes(1);
  });
});
