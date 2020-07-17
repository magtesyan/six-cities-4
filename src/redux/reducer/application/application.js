const initialState = {
  city: ``,
  step: `mainScreen`,
  place: {},
  activeOffer: {}
};

const ActionType = {
  ACTIVATE_OFFER: `ACTIVATE_OFFER`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  OPEN_DETAILS_SCREEN: `OPEN_DETAILS_SCREEN`,
};

const ActionCreator = {
  activateOffer: (offer) => ({
    type: ActionType.ACTIVATE_OFFER,
    payload: offer,
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
    case ActionType.ACTIVATE_OFFER:
      return Object.assign({}, state, {
        activeOffer: action.payload,
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
