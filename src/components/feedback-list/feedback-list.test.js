import renderer from "react-test-renderer";
import React from "react";

import FeedbackList from "./feedback-list.jsx";

const feedbacks = [
  {
    id: 1,
    comment: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
    rating: 5,
    date: `2019-05-08T14:13:56.569Z`,
    user: {
      avatarUrl: `img/1.png`,
      id: 4,
      isProp: true,
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
