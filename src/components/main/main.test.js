import {Router} from "react-router-dom";
import React from "react";
import renderer from "react-test-renderer";
import history from "../../history.js";
import Main from "./main.jsx";

const offers = [
  {
    id: `1`,
    name: `Beautiful & luxurious apartment at great location`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: true,
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    id: `2`,
    name: `Wood and stone place`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: true,
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    id: `3`,
    name: `Canal View Prinsengracht`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: true,
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    id: `4`,
    name: `Nice, cozy, warm big bed apartment`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: true,
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    id: `5`,
    name: `Wood and stone place`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: false,
    coordinates: [52.3909553943508, 4.85309666406198],
  }
];

const city = `Amsterdam`;
const cities = [
  `Amsterdam`,
  `Brussels`,
  `Paris`
];

const createMapBlock = () => {
  const div = global.document.createElement(`div`);
  div.setAttribute(`id`, `map`);
  global.document.body.appendChild(div);
};

const authorizationStatus = `AUTH`;

it(`Render Main`, () => {
  createMapBlock();
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <Main
            onSignInClick={jest.fn()}
            authorizationStatus={authorizationStatus}
            offers={offers}
            onOfferTitleClick={jest.fn()}
            onCityClick={jest.fn()}
            city={city}
            cities={cities}
            activeOffer={offers[0]}
            onCardMouseOver={jest.fn()}
            onLogoClick={jest.fn()}
            onFavoriteButtonClick={jest.fn()}
            onEmailClick={jest.fn()}
            errorStatus={false}
          />
        </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
