import Main from "./main.jsx";
import {Offers} from "../../mocks/data.js";
import React from "react";
import renderer from "react-test-renderer";

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      offersCount={Offers.OFFERS_COUNT}
      offersNames={Offers.OFFERS_NAMES}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
