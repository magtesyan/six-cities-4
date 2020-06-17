import App from "./app.jsx";
import {Offers} from "../../mocks/data.js";
import React from "react";
import renderer from "react-test-renderer";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offersCount={Offers.OFFERS_COUNT}
      offersNames={Offers.OFFERS_NAMES}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
