import * as renderer from "react-test-renderer";
import * as React from "react";
import CityList from "./city-list";

const city = `Amsterdam`;
const cities: string[] = [
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
