import {collectOffers} from "../../adapters/offers";

const initialState = {
  offers: [],
  cities: []
};

const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  GET_CITIES: `GET_CITIES`
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
};

const Operation = {
  getOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const fullOffers = collectOffers(response.data);
        const cities = Array.from(fullOffers.keys());
        dispatch(ActionCreator.getCities(cities));
        dispatch(ActionCreator.getOffers(fullOffers));
      });
  },
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

    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
