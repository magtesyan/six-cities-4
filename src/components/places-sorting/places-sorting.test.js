import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import React from "react";

import PlacesSorting from "./places-sorting.jsx";

const sortingOptions = [
  {
    name: `Popular`,
  },
  {
    name: `Price: low to high`,
  },
  {
    name: `Price: high to low`,
  },
  {
    name: `Top rated first`,
  },
];

it(`Sorting dropdown is rendered correctly`, () => {
  const onFilterClick = jest.fn();
  const tree = renderer
    .create(
        <BrowserRouter>
          <PlacesSorting
            onSortTypeClick={jest.fn()}
            onFilterClick={onFilterClick}
            sortingOptions={sortingOptions}
            isFilterOpened={true}
            activeSortingOption={sortingOptions[0].name}
          />
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
