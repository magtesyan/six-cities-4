import {collectOffers, transformOffer} from "../../adapters/offers";
import {getHotels, getNearHotels, getFavorites, postFavorite} from "../../clients/data.js";

const initialState = {
  offers: [],
  cities: [],
  favoriteOffers: [],
  nearOffers: [],
  errorStatus: false
};

const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  GET_NEAR_OFFERS: `GET_NEAR_OFFERS`,
  GET_FAVORITE_OFFERS: `GET_FAVORITE_OFFERS`,
  GET_CITIES: `GET_CITIES`,
  CHANGE_FAVORITE_STATUS: `CHANGE_FAVORITE_STATUS`,
  SET_ERROR: `SET_ERROR`
};

const ActionCreator = {
  getOffers: (fullOffers) => ({
    type: ActionType.GET_OFFERS,
    payload: fullOffers,
  }),
  getNearOffers: (fullOffers) => ({
    type: ActionType.GET_NEAR_OFFERS,
    payload: fullOffers,
  }),
  getFavoriteOffers: (favoriteOffers) => ({
    type: ActionType.GET_FAVORITE_OFFERS,
    payload: favoriteOffers,
  }),
  getCities: (cities) => ({
    type: ActionType.GET_CITIES,
    payload: cities,
  }),
  changeActiveOfferFavoriteStatus: (offer) => ({
    type: ActionType.CHANGE_FAVORITE_STATUS,
    payload: offer,
  }),
  setError: (error) => ({
    type: ActionType.SET_ERROR,
    payload: error,
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
        dispatch(ActionCreator.setError(false));
      })
      .catch(() => {
        dispatch(ActionCreator.setError(true));
      });
  },
  getNearOffers: (hotelId) => (dispatch, getState, api) => {
    return getNearHotels(api, hotelId)
      .then((response) => {
        dispatch(ActionCreator.getNearOffers(Array.from(collectOffers(response.data).values())[0]));
        dispatch(ActionCreator.setError(false));
      })
      .catch(() => {
        dispatch(ActionCreator.setError(true));
      });
  },
  changeActiveOfferFavoriteStatus: (hotelId, status) => (dispatch, getState, api) => {
    return postFavorite(api, hotelId, status)
      .then((response) => {
        dispatch(ActionCreator.changeActiveOfferFavoriteStatus(transformOffer(response.data)));
        dispatch(Operation.getFavoriteOffers());
        dispatch(ActionCreator.setError(false));
      })
      .catch(() => {
        dispatch(ActionCreator.setError(true));
      });
  },
  getFavoriteOffers: () => (dispatch, getState, api) => {
    return getFavorites(api)
      .then((response) => {
        const favoriteOffers = collectOffers(response.data);
        dispatch(ActionCreator.getFavoriteOffers(favoriteOffers));
        dispatch(ActionCreator.setError(false));
      })
      .catch(() => {
        dispatch(ActionCreator.setError(true));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
      });
    case ActionType.GET_NEAR_OFFERS:
      return Object.assign({}, state, {
        nearOffers: action.payload,
      });
    case ActionType.GET_FAVORITE_OFFERS:
      return Object.assign({}, state, {
        favoriteOffers: action.payload,
      });
    case ActionType.GET_CITIES:
      return Object.assign({}, state, {
        cities: action.payload,
      });
    case ActionType.SET_ERROR:
      return Object.assign({}, state, {
        errorStatus: action.payload,
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
