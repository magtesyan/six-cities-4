import {reducer, ActionType, ActionCreator} from "./application.js";

const mockOffer = {
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
  reviews: []
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: ``,
    step: `mainScreen`,
    place: {},
    errorStatus: false
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

it(`Reducer should change the active offer by a given value`, () => {
  expect(reducer({
    activeOffer: {}
  }, {
    type: ActionType.ACTIVATE_OFFER,
    payload: mockOffer,
  })).toEqual({
    activeOffer: mockOffer,
  });
});

it(`Reducer should change the step of the screen by a given value`, () => {
  expect(reducer({
    place: {},
    step: `mainScreen`
  }, {
    type: ActionType.OPEN_DETAILS_SCREEN,
    payload: mockOffer,
  })).toEqual({
    place: mockOffer,
    step: `detailsScreen`
  });
});

it(`Reducer should change the step to the auth screen by a given value`, () => {
  expect(reducer({
    step: `mainScreen`
  }, {
    type: ActionType.OPEN_AUTH_SCREEN,
  })).toEqual({
    step: `authScreen`
  });
});

it(`Reducer should change the step to the Main screen by a given value`, () => {
  expect(reducer({
    step: `authScreen`
  }, {
    type: ActionType.OPEN_MAIN_SCREEN,
  })).toEqual({
    step: `mainScreen`
  });
});

it(`Reducer should change the step to the Favorite screen by a given value`, () => {
  expect(reducer({
    step: `authScreen`
  }, {
    type: ActionType.OPEN_FAVORITES_SCREEN,
  })).toEqual({
    step: `favoritesScreen`
  });
});

it(`Reducer should change the Favorite status of the offer`, () => {
  expect(reducer({
    activeOffer: mockOffer
  }, {
    type: ActionType.CHANGE_FAVORITE_STATUS,
    payload: mockOffer
  })).toEqual({
    activeOffer: mockOffer
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city to Brussels returns correct action`, () => {
    expect(ActionCreator.changeCity(`Brussels`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Brussels`,
    });
  });
  it(`Action creator for activate offer returns correct action`, () => {
    expect(ActionCreator.activateOffer(mockOffer)).toEqual({
      type: ActionType.ACTIVATE_OFFER,
      payload: mockOffer,
    });
  });
  it(`Action creator for change offer favorite status returns correct action`, () => {
    expect(ActionCreator.changeActiveOfferFavoriteStatus(mockOffer)).toEqual({
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: mockOffer,
    });
  });
  it(`Action creator for open main screen returns correct action`, () => {
    expect(ActionCreator.openMainScreen()).toEqual({
      type: ActionType.OPEN_MAIN_SCREEN,
    });
  });
  it(`Action creator for open auth screen returns correct action`, () => {
    expect(ActionCreator.openAuthScreen()).toEqual({
      type: ActionType.OPEN_AUTH_SCREEN,
    });
  });
});
