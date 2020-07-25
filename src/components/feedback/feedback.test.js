import renderer from "react-test-renderer";
import React from "react";
import shortid from "shortid";

import Feedback from "./feedback.jsx";

const feedback = {
  id: 1,
  comment: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
  rating: 5,
  date: `2019-05-08T14:13:56.569Z`,
  user: {
    avatar_url: `img/1.png`,
    id: 4,
    is_pro: true,
    name: `Alex`
  }
};

it(`Feedbacks are rendered correctly`, () => {
  const tree = renderer
    .create(
        <Feedback
          key={shortid.generate()}
          feedback={feedback}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
