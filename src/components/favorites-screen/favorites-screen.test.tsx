import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history";
import FavoritesScreen from "./favorites-screen";
import {OfferType} from "../../types";

const favoriteOffers: Map<string, OfferType[]> = new Map([
  [`Amsterdam`, [
    {
      id: `1`,
      name: `Beautiful & luxurious apartment at great location`,
      price: 80,
      rating: 1,
      type: `Apartment`,
      rank: `2`,
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
        id: `100`,
        avatar: `img/avatar-angelina.jpg`,
        name: `Angelina`,
        super: 1,
      },
      coordinates: [52.3909553943508, 4.85309666406198],
      reviews: [
        {
          id: `2`,
          text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
          assessment: 5,
          name: `Francis`,
          date: new Date(2020, 0, 1)
        },
        {
          id: `3`,
          text: `We like the beach view.`,
          assessment: 4,
          name: `Marjorie`,
          date: new Date(2019, 1, 2)
        },
        {
          id: `4`,
          text: `Great location! I was very pleased with this condo. May I suggest bar height table and chairs for the patio for better beach viewing? Very clean and had everything we needed and then some!`,
          assessment: 3,
          name: `Amy`,
          date: new Date(2017, 3, 13)
        },
        {
          id: `5`,
          text: `Very nice accommodations and would definitely recommend.`,
          assessment: 2,
          name: `Lori`,
          date: new Date(2018, 2, 3)
        },
      ],
      isFavorite: true,
      city: `Amsterdam`,
      previewImage: `src.jpg`
    },
  ]]
]);

it(`Favorites Screen is rendered correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <FavoritesScreen
            onLogoClick={jest.fn()}
            onSignInClick={jest.fn()}
            authorizationStatus={`AUTH`}
            email={`m@m.ru`}
            favoriteOffers={favoriteOffers}
            onEmailClick={jest.fn()}
            onOfferTitleClick={jest.fn()}
            onFavoriteButtonClick={jest.fn()}
            onCardMouseOver={jest.fn()}
            errorStatus={false}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
