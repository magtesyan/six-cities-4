import {collectOffers, cities} from "../../../adapters/offers";

let fullOffers = [];

const initialState = {
  offers: [],
  cities,
};

const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
};

const ActionCreator = {
  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
    payload: fullOffers.get(city),
  }),
};

const Operation = {
  getOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        fullOffers = collectOffers(response.data);
        dispatch(ActionCreator.getOffers(Array.from(fullOffers.keys())[0]));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
        cities
      });

    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
