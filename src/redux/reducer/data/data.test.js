import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../api.js";
import {reducer, ActionType, Operation} from "./data.js";

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

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    cities: [],
    offers: [],
  });
});

it(`Reducer should update offers by load offers`, () => {
  expect(reducer({
    offers: [],
  }, {
    type: ActionType.GET_OFFERS,
    payload: fullOffers,
  })).toEqual({
    cities: [],
    offers: fullOffers,
  });
});

const serverMock = [{
  "bedrooms": 3,
  "city": {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10
    },
    "name": `Amsterdam`
  },
  "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  "host": {
    "avatar_url": `img/1.png`,
    "id": 3,
    "is_pro": true,
    "name": `Angelina`
  },
  "id": 1,
  "images": [`img/1.png`, `img/2.png`],
  "is_favorite": false,
  "is_premium": false,
  "location": {
    "latitude": 52.35514938496378,
    "longitude": 4.673877537499948,
    "zoom": 8
  },
  "max_adults": 4,
  "preview_image": `img/1.png`,
  "price": 120,
  "rating": 4.8,
  "title": `Beautiful & luxurious studio at great location`,
  "type": `apartment`
}];

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = Operation.getOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, serverMock);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_OFFERS,
          payload: [{
            id: expect.anything(),
            name: serverMock[0].title,
            price: serverMock[0].price,
            rating: serverMock[0].rating,
            type: serverMock[0].type,
            rank: serverMock[0].is_premium,
            pictures: serverMock[0].images,
            description: serverMock[0].description,
            bedrooms: serverMock[0].bedrooms,
            guests: serverMock[0].max_adults,
            features: serverMock[0].goods,
            host: {
              avatar: serverMock[0].host.avatar_url,
              id: serverMock[0].host.id,
              super: serverMock[0].host.is_pro ? 1 : 0,
              name: serverMock[0].host.name
            },
            coordinates: [serverMock[0].location.latitude, serverMock[0].location.longitude],
            reviews: []
          }],
        });
      });
  });
});
