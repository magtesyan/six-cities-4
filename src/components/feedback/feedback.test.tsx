import * as renderer from "react-test-renderer";
import * as React from "react";
import Feedback from "./feedback";
import {FeedbackType} from "../../types";

const feedback: FeedbackType = {
  id: 1,
  comment: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
  rating: 5,
  date: new Date(),
  user: {
    avatarUrl: `img/1.png`,
    id: 4,
    isPro: true,
    name: `Alex`
  }
};

it(`Feedbacks are rendered correctly`, () => {
  const tree = renderer
    .create(
        <Feedback
          key={feedback.id}
          feedback={feedback}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
