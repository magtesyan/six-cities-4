import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import React from "react";
import shortid from "shortid";

import PlaceCard from "./place-card.jsx";

const className = `near-places__card`;

const offers = {
  id: shortid.generate(),
  name: `Beautiful & luxurious apartment at great location`,
  price: 80,
  rating: 1,
  type: `Apartment`,
  rank: `Premium`
};

it(`Cards are rendered correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PlaceCard
            className = {className}
            offer={offers}
            key={offers.id}
            onOfferTitleClick = {jest.fn()}
            onMouseOver = {jest.fn()}
          />
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
