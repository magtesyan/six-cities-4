import {Router} from "react-router-dom";
import renderer from "react-test-renderer";
import React from "react";
import history from "../../history.js";
import PlaceCard from "./place-card.jsx";

const className = `near-places__card`;

const offer = {
  id: `1`,
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
            offer={offer}
            key={`${offer.id}${offer.price}${offer.name}${offer.previewImage}`}
            onOfferTitleClick = {jest.fn()}
            onMouseOver = {jest.fn()}
            onFavoriteButtonClick={jest.fn()}
            isUserAuthorized={true}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
