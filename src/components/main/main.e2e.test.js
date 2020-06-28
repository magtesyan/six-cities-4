import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Enzyme, {mount} from "enzyme";
import Main from "./main";

import shortid from "shortid";

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
];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Click on Title Test`, () => {
  it(`Should offer title be pressed`, () => {
    const onOfferTitleClick = jest.fn();

    const mainScreen = mount(
        <Main
          offers={offers}
          onOfferTitleClick = {onOfferTitleClick}
        />
    );

    const offerTitle = mainScreen.find(`.place-card__name`);

    offerTitle.forEach((title) => title.props().onClick());

    expect(onOfferTitleClick.mock.calls.length).toBe(offerTitle.length);
  });
});
