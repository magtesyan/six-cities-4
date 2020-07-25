import React from "react";
import renderer from "react-test-renderer";

import RatingInput from "./rating-input.jsx";

const isDisabled = false;
const index = 1;

it(`Render Rating Input`, () => {
  const tree = renderer
    .create(
        <RatingInput
          number={index}
          key={index}
          isDisabled={isDisabled}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
