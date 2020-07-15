import React from "react";
import renderer from "react-test-renderer";

import EmptyScreen from "./empty-screen.jsx";

it(`Render EmptyScreen`, () => {
  const tree = renderer
    .create(<EmptyScreen />).toJSON();

  expect(tree).toMatchSnapshot();
});
