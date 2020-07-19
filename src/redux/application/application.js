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
  OPEN_AUTH_SCREEN: `OPEN_AUTH_SCREEN`,
  OPEN_MAIN_SCREEN: `OPEN_MAIN_SCREEN`,
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

  openAuthScreen: () => ({
    type: ActionType.OPEN_AUTH_SCREEN,
  }),

  openMainScreen: () => ({
    type: ActionType.OPEN_MAIN_SCREEN,
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
    case ActionType.OPEN_AUTH_SCREEN:
      return Object.assign({}, state, {
        step: `authScreen`,
      });
    case ActionType.OPEN_MAIN_SCREEN:
      return Object.assign({}, state, {
        step: `mainScreen`,
      });

    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
