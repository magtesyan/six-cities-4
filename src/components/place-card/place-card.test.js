import {Router} from "react-router-dom";
import renderer from "react-test-renderer";
import React from "react";
import shortid from "shortid";
import history from "../../history.js";
import PlaceCard from "./place-card.jsx";

const className = `near-places__card`;

const offers = {
  id: shortid.generate(),
  name: `Beautiful & luxurious apartment at great location`,
  price: 80,
  rating: 1,
  type: `Apartment`,
  rank: true
};

it(`Cards are rendered correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <PlaceCard
            className = {className}
            offer={offers}
            key={offers.id}
            onOfferTitleClick = {jest.fn()}
            onMouseOver = {jest.fn()}
            onFavoriteButtonClick={jest.fn()}
            isUserAuthorized={true}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
