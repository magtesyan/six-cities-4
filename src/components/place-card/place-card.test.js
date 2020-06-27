import PlaceCard from "./place-card.jsx";
import renderer from "react-test-renderer";
import React from "react";
import shortid from "shortid";

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
    .create(<PlaceCard
      offer={offers}
      key={offers.id}
      onOfferTitleClick = {jest.fn()}
      onMouseOver = {jest.fn()}
    />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
