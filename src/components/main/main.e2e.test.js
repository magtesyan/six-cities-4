import Adapter from "enzyme-adapter-react-16";
import {Router} from "react-router-dom";
import React from "react";
import Enzyme, {mount} from "enzyme";
import shortid from "shortid";
import history from "../../history.js";
import Main from "./main.jsx";

const offers = [
  {
    id: shortid.generate(),
    name: `Beautiful & luxurious apartment at great location`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: true,
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    id: shortid.generate(),
    name: `Wood and stone place`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: true,
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    id: shortid.generate(),
    name: `Canal View Prinsengracht`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: true,
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    id: shortid.generate(),
    name: `Nice, cozy, warm big bed apartment`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: true,
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    id: shortid.generate(),
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

Enzyme.configure({
  adapter: new Adapter(),
});

const createMapBlock = () => {
  const div = global.document.createElement(`div`);
  div.setAttribute(`id`, `map`);
  global.document.body.appendChild(div);
};

const authorizationStatus = `AUTH`;

describe(`Click on Title Test`, () => {
  createMapBlock();
  it(`Should offer title be pressed`, () => {
    const onOfferTitleClick = jest.fn();

    const mainScreen = mount(
        <Router
          history={history}
        >
          <Main
            onSignInClick={jest.fn()}
            authorizationStatus={authorizationStatus}
            offers={offers}
            onOfferTitleClick = {onOfferTitleClick}
            onCityClick={jest.fn()}
            city={city}
            cities={cities}
            activeOffer={offers[0]}
            onCardMouseOver={jest.fn()}
            onLogoClick={jest.fn()}
            onFavoriteButtonClick={jest.fn()}
          />
        </Router>
    );

    const offerTitle = mainScreen.find(`.place-card__name`);

    offerTitle.forEach((title) => title.props().onClick());

    expect(onOfferTitleClick.mock.calls.length).toBe(offerTitle.length);
  });
});
