import {Router} from "react-router-dom";
import renderer from "react-test-renderer";
import React from "react";
import history from "../../history.js";
import PlaceCardsList from "./place-cards-list.jsx";

const offers = [
  {
    id: `1`,
    name: `Beautiful & luxurious apartment at great location`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: true
  },
  {
    id: `2`,
    name: `Wood and stone place`,
    price: 90,
    rating: 2,
    type: `Private room`,
    rank: true
  },
  {
    id: `3`,
    name: `Canal View Prinsengracht`,
    price: 100,
    rating: 3,
    type: `Apartment`,
    rank: false
  },
  {
    id: `4`,
    name: `Nice, cozy, warm big bed apartment`,
    price: 110,
    rating: 4,
    type: `Private room`,
    rank: false
  },
  {
    id: `5`,
    name: `Wood and stone place`,
    price: 120,
    rating: 5,
    type: `Apartment`,
    rank: true
  }
];
const className = `near-places__card`;
const activeCity = `Amsterdam`;

it(`Cards List is rendered correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <PlaceCardsList
            className = {className}
            offers = {offers}
            onOfferTitleClick = {jest.fn()}
            activeCity={activeCity}
            onCardMouseOver={jest.fn()}
            onFavoriteButtonClick={jest.fn()}
            isUserAuthorized={true}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
