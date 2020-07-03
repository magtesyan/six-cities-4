import renderer from "react-test-renderer";
import React from "react";

import FeedbackList from "./feedback-list.jsx";

const reviews = [
  {
    text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
    assessment: 5,
    name: `Francis`,
    date: new Date(2020, 0, 1)
  },
  {
    text: `We like the beach view.`,
    assessment: 4,
    name: `Marjorie`,
    date: new Date(2019, 1, 2)
  },
];

it(`Feedback List is rendered correctly`, () => {
  const tree = renderer
    .create(
        <FeedbackList
          reviews={reviews}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
