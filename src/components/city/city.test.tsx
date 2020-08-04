import * as renderer from "react-test-renderer";
import * as React from "react";
import City from "./city";

const city = `Amsterdam`;
const activeCity = `Amsterdam`;

it(`City is rendered correctly`, () => {
  const onCityClick = jest.fn();
  const tree = renderer
    .create(
        <City
          key={city}
          city={city}
          activeCity={activeCity}
          onCityClick={onCityClick}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
