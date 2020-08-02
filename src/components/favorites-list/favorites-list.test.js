import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history.js";
import FavoritesList from "./favorites-list.jsx";

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

const city = `Amsterdam`;

it(`Favorites List is rendered correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <FavoritesList
            key={`${city}-favorite-offers`}
            offers={offers}
            isUserAuthorized={true}
            onFavoriteButtonClick={jest.fn()}
            onOfferTitleClick={jest.fn()}
            city={city}
            onCardMouseOver={jest.fn()}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
