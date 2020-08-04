import * as renderer from "react-test-renderer";
import * as React from "react";
import FeedbackList from "./feedback-list";
import {FeedbackType} from "../../types";

const feedbacks: FeedbackType[] = [
  {
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
  }
];

it(`Feedback List is rendered correctly`, () => {
  const tree = renderer
    .create(
        <FeedbackList
          feedbacks={feedbacks}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
