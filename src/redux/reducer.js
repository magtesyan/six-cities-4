import {fullOffers} from "../mocks/offers.js";

const initialState = {
  city: `Amsterdam`,
  step: `mainScreen`,
  place: {},
  offers: fullOffers.get(`Amsterdam`),
  cities: Array.from(fullOffers.keys())
};

const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  OPEN_DETAILS_SCREEN: `OPEN_DETAILS_SCREEN`
};

const ActionCreator = {
  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
    payload: fullOffers.get(city),
  }),

  openDetailsScreen: (offer) => ({
    type: ActionType.OPEN_DETAILS_SCREEN,
    payload: offer,
  }),

  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
      });

    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload,
      });

    case ActionType.OPEN_DETAILS_SCREEN:
      return Object.assign({}, state, {
        step: `detailsScreen`,
        place: action.payload
      });

    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
