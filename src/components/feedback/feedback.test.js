import renderer from "react-test-renderer";
import React from "react";
import shortid from "shortid";

import Feedback from "./feedback.jsx";

const review = {
  text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
  assessment: 5,
  name: `Francis`,
  date: new Date(2020, 0, 1)
};

it(`Feedbacks are rendered correctly`, () => {
  const tree = renderer
    .create(
        <Feedback
          key = {shortid.generate()}
          review = {review}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
