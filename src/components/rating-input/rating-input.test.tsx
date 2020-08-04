import * as React from "react";
import * as renderer from "react-test-renderer";
import RatingInput from "./rating-input";

const isDisabled = false;
const index = 1;

it(`Render Rating Input`, () => {
  const tree = renderer
    .create(
        <RatingInput
          number={index}
          key={index}
          isDisabled={isDisabled}
          onRatingChange={jest.fn()}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
