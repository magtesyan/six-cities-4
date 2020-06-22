import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";
import Enzyme, {mount} from "enzyme";
import React from "react";
import shortid from "shortid";

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = [
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

it(`When mouse on card - card details sent`, () => {
  const onMouseOver = jest.fn((args) => args);
  const expectedObj = {
    name: `Beautiful & luxurious apartment at great location`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: `Premium`
  };

  const card = mount(
      <Card
        name={mock[0].name}
        key={mock[0].id}
        price={mock[0].price}
        rating={mock[0].rating}
        type={mock[0].type}
        rank={mock[0].rank}
        onOfferTitleClick = {() => {}}
        onMouseOver = {onMouseOver}
      />);

  const article = card.find(`article`);
  article.simulate(`mouseover`);

  expect(onMouseOver).toHaveBeenCalledTimes(1);
  expect(onMouseOver.mock.calls[0][0]).toMatchObject(expectedObj);
});
