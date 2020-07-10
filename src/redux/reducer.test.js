import {reducer, ActionType, ActionCreator} from "./reducer.js";

const fullOffers = new Map([
  [`Amsterdam`, [
    {
      id: `M_u53rqBj1L`,
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
          id: `hf1VdxqXxV`,
          text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
          assessment: 5,
          name: `Francis`,
          date: new Date(2020, 0, 1)
        },
        {
          id: `7Q3he9zq806`,
          text: `We like the beach view.`,
          assessment: 4,
          name: `Marjorie`,
          date: new Date(2019, 1, 2)
        },
        {
          id: `TFmHkG3D9L`,
          text: `Great location! I was very pleased with this condo. May I suggest bar height table and chairs for the patio for better beach viewing? Very clean and had everything we needed and then some!`,
          assessment: 3,
          name: `Amy`,
          date: new Date(2017, 3, 13)
        },
        {
          id: `E7BzjwJhIEm`,
          text: `Very nice accommodations and would definitely recommend.`,
          assessment: 2,
          name: `Lori`,
          date: new Date(2018, 2, 3)
        },
      ]
    },
    {
      id: `hHjtE1NWpQZ`,
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
          id: `SVEWJkQkvK`,
          text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
          assessment: 5,
          name: `Francis`,
          date: new Date(2020, 0, 1)
        },
        {
          id: `LI9x84pBqd9`,
          text: `We like the beach view.`,
          assessment: 4,
          name: `Marjorie`,
          date: new Date(2019, 1, 2)
        },
        {
          id: `VtXPYG9nKP`,
          text: `Great location! I was very pleased with this condo. May I suggest bar height table and chairs for the patio for better beach viewing? Very clean and had everything we needed and then some!`,
          assessment: 3,
          name: `Amy`,
          date: new Date(2017, 3, 13)
        },
        {
          id: `cpmJFqL52N7`,
          text: `Very nice accommodations and would definitely recommend.`,
          assessment: 2,
          name: `Lori`,
          date: new Date(2018, 2, 3)
        },
      ]
    },
    {
      id: `AuW30Tq01qt`,
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
          id: `a0t2-k7Lrr`,
          text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
          assessment: 5,
          name: `Francis`,
          date: new Date(2020, 0, 1)
        },
        {
          id: `mJq8CowwXPe`,
          text: `We like the beach view.`,
          assessment: 4,
          name: `Marjorie`,
          date: new Date(2019, 1, 2)
        },
        {
          id: `ULfjTqLYTB`,
          text: `Great location! I was very pleased with this condo. May I suggest bar height table and chairs for the patio for better beach viewing? Very clean and had everything we needed and then some!`,
          assessment: 3,
          name: `Amy`,
          date: new Date(2017, 3, 13)
        },
        {
          id: `yaCJc6Lye`,
          text: `Very nice accommodations and would definitely recommend.`,
          assessment: 2,
          name: `Lori`,
          date: new Date(2018, 2, 3)
        },
      ]
    },
    {
      id: `9n21f8lMnjh`,
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
          id: `xgIMmtPQrZ`,
          text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
          assessment: 5,
          name: `Francis`,
          date: new Date(2020, 0, 1)
        },
        {
          id: `VKEGLrvZcWn`,
          text: `We like the beach view.`,
          assessment: 4,
          name: `Marjorie`,
          date: new Date(2019, 1, 2)
        },
        {
          id: `Wkj75rZKL7`,
          text: `Great location! I was very pleased with this condo. May I suggest bar height table and chairs for the patio for better beach viewing? Very clean and had everything we needed and then some!`,
          assessment: 3,
          name: `Amy`,
          date: new Date(2017, 3, 13)
        },
        {
          id: `kI7gOSS0Xu4`,
          text: `Very nice accommodations and would definitely recommend.`,
          assessment: 2,
          name: `Lori`,
          date: new Date(2018, 2, 3)
        },
      ]
    },
    {
      id: `RnSYsvkr797`,
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
          id: `Wbq9lLh1fH`,
          text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
          assessment: 5,
          name: `Francis`,
          date: new Date(2020, 0, 1)
        },
        {
          id: `1LembBihNkF`,
          text: `We like the beach view.`,
          assessment: 4,
          name: `Marjorie`,
          date: new Date(2019, 1, 2)
        },
        {
          id: `VJ-Qyi4s73`,
          text: `Great location! I was very pleased with this condo. May I suggest bar height table and chairs for the patio for better beach viewing? Very clean and had everything we needed and then some!`,
          assessment: 3,
          name: `Amy`,
          date: new Date(2017, 3, 13)
        },
        {
          id: `NYUoB8sV4Nh`,
          text: `Very nice accommodations and would definitely recommend.`,
          assessment: 2,
          name: `Lori`,
          date: new Date(2018, 2, 3)
        },
      ]
    }
  ]],
  [`Brussels`, [
    {
      id: `4HWSrCwIMGl`,
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
      coordinates: [50.85045, 4.35],
      reviews: [
        {
          id: `EkJUXIvasgc`,
          text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
          assessment: 5,
          name: `Francis`,
          date: new Date(2020, 0, 1)
        },
        {
          id: `g8yIfubFm`,
          text: `We like the beach view.`,
          assessment: 4,
          name: `Marjorie`,
          date: new Date(2019, 1, 2)
        },
        {
          id: `XCSP_wmUjnl`,
          text: `Great location! I was very pleased with this condo. May I suggest bar height table and chairs for the patio for better beach viewing? Very clean and had everything we needed and then some!`,
          assessment: 3,
          name: `Amy`,
          date: new Date(2017, 3, 13)
        },
        {
          id: `_UR7KoYNhx`,
          text: `Very nice accommodations and would definitely recommend.`,
          assessment: 2,
          name: `Lori`,
          date: new Date(2018, 2, 3)
        },
      ]
    },
  ]],
  [`Paris`, []],
  [`Cologne`, []],
  [`Hamburg`, []],
  [`Dusseldorf`, []],
]);

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: `Amsterdam`,
    place: {},
    step: `mainScreen`,
    offers: fullOffers.get(`Amsterdam`),
    cities: Array.from(fullOffers.keys()),
    activeOffer: fullOffers.get(`Amsterdam`)[0]
  });
});

it(`Reducer should change the city by a given value`, () => {
  expect(reducer({
    city: `Amsterdam`
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Brussels`,
  })).toEqual({
    city: `Brussels`,
  });

  expect(reducer({
    city: `Brussels`
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Amsterdam`,
  })).toEqual({
    city: `Amsterdam`,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city to Brussels returns correct action`, () => {
    expect(ActionCreator.changeCity(`Brussels`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Brussels`,
    });
  });
});
