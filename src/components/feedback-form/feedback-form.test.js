import React from "react";
import renderer from "react-test-renderer";

import FeedbackForm from "./feedback-form.jsx";

const feedbackFormStatus = ``;
const hotelId = ``;

it(`Render Feedback Form`, () => {
  const tree = renderer
    .create(
        <FeedbackForm
          onSubmitFeedback={jest.fn()}
          hotelId={hotelId}
          feedbackFormStatus={feedbackFormStatus}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
