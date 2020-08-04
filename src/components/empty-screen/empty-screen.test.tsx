import * as React from "react";
import * as renderer from "react-test-renderer";
import EmptyScreen from "./empty-screen";

it(`Render EmptyScreen`, () => {
  const tree = renderer
    .create(<EmptyScreen />).toJSON();

  expect(tree).toMatchSnapshot();
});
