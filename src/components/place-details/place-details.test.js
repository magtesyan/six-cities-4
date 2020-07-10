import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import React from "react";
import shortid from "shortid";

import PlaceDetails from "./place-details.jsx";

const offers = [
  {
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
    },
    coordinates: [52.3909553943508, 4.85309666406198],
    reviews: [
      {
        id: shortid.generate(),
        text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
        assessment: 5,
        name: `Francis`,
        date: new Date(2020, 0, 1)
      },
      {
        id: shortid.generate(),
        text: `We like the beach view.`,
        assessment: 4,
        name: `Marjorie`,
        date: new Date(2019, 1, 2)
      },
      {
        id: shortid.generate(),
        text: `Great location! I was very pleased with this condo. May I suggest bar height table and chairs for the patio for better beach viewing? Very clean and had everything we needed and then some!`,
        assessment: 3,
        name: `Amy`,
        date: new Date(2017, 3, 13)
      },
      {
        id: shortid.generate(),
        text: `Very nice accommodations and would definitely recommend.`,
        assessment: 2,
        name: `Lori`,
        date: new Date(2018, 2, 3)
      },
    ]
  },
  {
    id: shortid.generate(),
    name: `Wood and stone place`,
    price: 90,
    rating: 2,
    type: `Private Room`,
    rank: `Premium`,
    pictures: [
      `img/room.jpg`,
    ],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    bedrooms: 2,
    guests: 4,
    features: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
    ],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Sindi`,
      super: 0,
    },
    coordinates: [52.369553943508, 4.85309666406198],
    reviews: [
      {
        id: shortid.generate(),
        text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
        assessment: 5,
        name: `Francis`,
        date: new Date(2020, 0, 1)
      },
      {
        id: shortid.generate(),
        text: `We like the beach view.`,
        assessment: 4,
        name: `Marjorie`,
        date: new Date(2019, 1, 2)
      },
      {
        id: shortid.generate(),
        text: `Great location! I was very pleased with this condo. May I suggest bar height table and chairs for the patio for better beach viewing? Very clean and had everything we needed and then some!`,
        assessment: 3,
        name: `Amy`,
        date: new Date(2017, 3, 13)
      },
      {
        id: shortid.generate(),
        text: `Very nice accommodations and would definitely recommend.`,
        assessment: 2,
        name: `Lori`,
        date: new Date(2018, 2, 3)
      },
    ]
  },
  {
    id: shortid.generate(),
    name: `Canal View Prinsengracht`,
    price: 100,
    rating: 3,
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
    bedrooms: 3,
    guests: 3,
    features: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
    ],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Joanna`,
      super: 1,
    },
    coordinates: [52.3909553943508, 4.929309666406198],
    reviews: [
      {
        id: shortid.generate(),
        text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
        assessment: 5,
        name: `Francis`,
        date: new Date(2020, 0, 1)
      },
      {
        id: shortid.generate(),
        text: `We like the beach view.`,
        assessment: 4,
        name: `Marjorie`,
        date: new Date(2019, 1, 2)
      },
      {
        id: shortid.generate(),
        text: `Great location! I was very pleased with this condo. May I suggest bar height table and chairs for the patio for better beach viewing? Very clean and had everything we needed and then some!`,
        assessment: 3,
        name: `Amy`,
        date: new Date(2017, 3, 13)
      },
      {
        id: shortid.generate(),
        text: `Very nice accommodations and would definitely recommend.`,
        assessment: 2,
        name: `Lori`,
        date: new Date(2018, 2, 3)
      },
    ]
  },
  {
    id: shortid.generate(),
    name: `Nice, cozy, warm big bed apartment`,
    price: 110,
    rating: 4,
    type: `Private Room`,
    rank: `Premium`,
    pictures: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    bedrooms: 4,
    guests: 2,
    features: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
    ],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Eva`,
      super: 0,
    },
    coordinates: [52.3809553943508, 4.939309666406198],
    reviews: [
      {
        id: shortid.generate(),
        text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
        assessment: 5,
        name: `Francis`,
        date: new Date(2020, 0, 1)
      },
      {
        id: shortid.generate(),
        text: `We like the beach view.`,
        assessment: 4,
        name: `Marjorie`,
        date: new Date(2019, 1, 2)
      },
      {
        id: shortid.generate(),
        text: `Great location! I was very pleased with this condo. May I suggest bar height table and chairs for the patio for better beach viewing? Very clean and had everything we needed and then some!`,
        assessment: 3,
        name: `Amy`,
        date: new Date(2017, 3, 13)
      },
      {
        id: shortid.generate(),
        text: `Very nice accommodations and would definitely recommend.`,
        assessment: 2,
        name: `Lori`,
        date: new Date(2018, 2, 3)
      },
    ]
  },
  {
    id: shortid.generate(),
    name: `Wood and stone place`,
    price: 120,
    rating: 5,
    type: `Apartment`,
    rank: `Premium`,
    pictures: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
    ],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    bedrooms: 5,
    guests: 1,
    features: [
      `Wi-Fi`,
      `Washing machine`,
    ],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Marta`,
      super: 1,
    },
    coordinates: [],
    reviews: [
      {
        id: shortid.generate(),
        text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
        assessment: 5,
        name: `Francis`,
        date: new Date(2020, 0, 1)
      },
      {
        id: shortid.generate(),
        text: `We like the beach view.`,
        assessment: 4,
        name: `Marjorie`,
        date: new Date(2019, 1, 2)
      },
      {
        id: shortid.generate(),
        text: `Great location! I was very pleased with this condo. May I suggest bar height table and chairs for the patio for better beach viewing? Very clean and had everything we needed and then some!`,
        assessment: 3,
        name: `Amy`,
        date: new Date(2017, 3, 13)
      },
      {
        id: shortid.generate(),
        text: `Very nice accommodations and would definitely recommend.`,
        assessment: 2,
        name: `Lori`,
        date: new Date(2018, 2, 3)
      },
    ]
  }
];

const city = `Amsterdam`;

const createMapBlock = () => {
  const div = global.document.createElement(`div`);
  div.setAttribute(`id`, `map`);
  global.document.body.appendChild(div);
};

it(`PlaceDetailsScreen is not rendered correctly`, () => {
  const onOfferTitleClick = jest.fn();
  createMapBlock();

  const tree = renderer
    .create(
        <BrowserRouter>
          <PlaceDetails
            offer={offers[0]}
            nearestOffers = {offers}
            onOfferTitleClick = {onOfferTitleClick}
            city={city}
            onCardMouseOver={jest.fn()}
          />
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
