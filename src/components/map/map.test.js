import renderer from "react-test-renderer";
import React from "react";

import Map from "./map.jsx";

const offers = [
  {
    coordinates: [52.3909553943508, 4.85309666406198],
  },
];
const city = [52.38333, 4.9];

const createMapBlock = () => {
  const div = global.document.createElement(`div`);
  div.setAttribute(`id`, `map`);
  global.document.body.appendChild(div);
};

it(`Map is rendered correctly`, () => {
  createMapBlock();
  const tree = renderer
    .create(
        <Map
          city={city}
          offers = {offers}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
