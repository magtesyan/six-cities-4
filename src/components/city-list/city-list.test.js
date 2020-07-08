import renderer from "react-test-renderer";
import React from "react";

import CityList from "./city-list.jsx";

const city = `Amsterdam`;
const cities = [
  `Amsterdam`,
  `Brussels`,
  `Paris`
];

it(`Cities List is rendered correctly`, () => {
  const onCityClick = jest.fn();
  const tree = renderer
    .create(
        <CityList
          onCityClick={onCityClick}
          activeCity={city}
          cities={cities}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
