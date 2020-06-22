import App from "./app.jsx";
import React from "react";
import renderer from "react-test-renderer";
import shortid from "shortid";

const Offers = {
  OFFERS_COUNT: 312,
  OFFERS_NAMES: [
    {
      id: shortid.generate(),
      name: `Beautiful & luxurious apartment at great location`,
      price: 80,
      rating: 1,
      type: `Apartment`,
      rank: `Premium`
    },
    {
      id: shortid.generate(),
      name: `Wood and stone place`,
      price: 80,
      rating: 1,
      type: `Apartment`,
      rank: `Premium`
    },
    {
      id: shortid.generate(),
      name: `Canal View Prinsengracht`,
      price: 80,
      rating: 1,
      type: `Apartment`,
      rank: `Premium`
    },
    {
      id: shortid.generate(),
      name: `Nice, cozy, warm big bed apartment`,
      price: 80,
      rating: 1,
      type: `Apartment`,
      rank: `Premium`
    },
    {
      id: shortid.generate(),
      name: `Wood and stone place`,
      price: 80,
      rating: 1,
      type: `Apartment`,
      rank: `Premium`
    }
  ]
};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offersCount={Offers.OFFERS_COUNT}
      offersNames={Offers.OFFERS_NAMES}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
