import PlaceDetails from "./place-details.jsx";
import renderer from "react-test-renderer";
import React from "react";
import shortid from "shortid";

const offer = {
  id: shortid.generate(),
  name: `Beautiful & luxurious apartment at great location`,
  price: 80,
  rating: 1,
  type: `Apartment`,
  rank: `Premium`,
  pictures: [
    `img/room.jpg`,
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`,
    `img/apartment-03.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-01.jpg`
  ],
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  bedrooms: 1,
  guests: 5,
  features: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`
  ],
  host: {
    avatar: `img/avatar-angelina.jpg`,
    name: `Angelina`,
    super: 1,
  }
};

it(`PlaceDetailsScreen is not rendered correctly`, () => {
  const tree = renderer
    .create(<PlaceDetails
      offer={offer}
    />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
