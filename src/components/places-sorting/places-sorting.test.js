import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import React from "react";

import PlacesSorting from "./places-sorting.jsx";

it(`Sorting dropdown is rendered correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PlacesSorting
            onSortTypeClick={jest.fn()}
          />
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
