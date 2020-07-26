import {collectOffers, transformOffer} from "../../adapters/offers";
import {getHotels, postFavorite} from "../../clients/data.js";

import {ActionCreator as AppActionCreator} from "../application/application.js";

const initialState = {
  offers: [],
  cities: []
};

const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  GET_CITIES: `GET_CITIES`,
  CHANGE_FAVORITE_STATUS: `CHANGE_FAVORITE_STATUS`,
};

const ActionCreator = {
  getOffers: (fullOffers) => ({
    type: ActionType.GET_OFFERS,
    payload: fullOffers,
  }),
  getCities: (cities) => ({
    type: ActionType.GET_CITIES,
    payload: cities,
  }),
  changeActiveOfferFavoriteStatus: (offer) => ({
    type: ActionType.CHANGE_FAVORITE_STATUS,
    payload: offer,
  }),
};

const Operation = {
  getOffers: () => (dispatch, getState, api) => {
    return getHotels(api)
      .then((response) => {
        const fullOffers = collectOffers(response.data);
        const cities = Array.from(fullOffers.keys());
        dispatch(ActionCreator.getCities(cities));
        dispatch(ActionCreator.getOffers(fullOffers));
      });
  },
  changeActiveOfferFavoriteStatus: (hotelId, status) => (dispatch, getState, api) => {
    return postFavorite(api, hotelId, status)
      .then((response) => {
        dispatch(ActionCreator.changeActiveOfferFavoriteStatus(transformOffer(response.data)));
        dispatch(AppActionCreator.openDetailsScreen(transformOffer(response.data)));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
      });
    case ActionType.GET_CITIES:
      return Object.assign({}, state, {
        cities: action.payload,
      });
    case ActionType.CHANGE_FAVORITE_STATUS:
      const newOffers = new Map(state.offers).set(action.payload.city, state.offers.get(action.payload.city).map((offer) => {
        return offer.id === action.payload.id ? action.payload : offer;
      }));

      return Object.assign({}, state, {
        offers: newOffers
      });

    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
