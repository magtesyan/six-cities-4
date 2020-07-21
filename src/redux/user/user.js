import {ActionCreator as AppActionCreator} from "../application/application.js";
import {getLogin, postLogin} from "../../clients/login.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_EMAIL: `SET_EMAIL`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  setEmail: (email) => {
    return {
      type: ActionType.SET_EMAIL,
      payload: email,
    };
  },
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return getLogin(api)
      .then((response) => {
        dispatch(ActionCreator.setEmail(response.data.email));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return postLogin(api, authData.login, authData.password)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setEmail(authData.login));
        dispatch(AppActionCreator.openMainScreen());
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_EMAIL:
      return Object.assign({}, state, {
        email: action.payload,
      });
  }

  return state;
};


export {ActionCreator, Operation, ActionType, AuthorizationStatus, reducer};
