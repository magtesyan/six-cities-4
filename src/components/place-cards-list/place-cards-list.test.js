import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import React from "react";
import shortid from "shortid";

import PlaceCardsList from "./place-cards-list.jsx";

const offers = [
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
    price: 90,
    rating: 2,
    type: `Private room`,
    rank: `Premium`
  },
  {
    id: shortid.generate(),
    name: `Canal View Prinsengracht`,
    price: 100,
    rating: 3,
    type: `Apartment`,
    rank: `Premium`
  },
  {
    id: shortid.generate(),
    name: `Nice, cozy, warm big bed apartment`,
    price: 110,
    rating: 4,
    type: `Private room`,
    rank: `Premium`
  },
  {
    id: shortid.generate(),
    name: `Wood and stone place`,
    price: 120,
    rating: 5,
    type: `Apartment`,
    rank: `Premium`
  }
];
const className = `near-places__card`;

it(`Cards List is rendered correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PlaceCardsList
            className = {className}
            offers = {offers}
            onOfferTitleClick = {jest.fn()}
          />
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
