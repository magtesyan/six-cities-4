import {ActionCreator as AppActionCreator} from "../application/application.js";
import {getLogin, postLogin} from "../../clients/login.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  errorStatus: false
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_EMAIL: `SET_EMAIL`,
  SET_ERROR: `SET_ERROR`
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
  setError: (error) => ({
    type: ActionType.SET_ERROR,
    payload: error,
  }),
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return getLogin(api)
      .then((response) => {
        dispatch(ActionCreator.setEmail(response.data.email));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch(() => {
        dispatch(ActionCreator.setError(true));
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return postLogin(api, authData.login, authData.password)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setEmail(authData.login));
        dispatch(AppActionCreator.openMainScreen());
      })
      .catch(() => {
        dispatch(ActionCreator.setError(true));
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
    case ActionType.SET_ERROR:
      return Object.assign({}, state, {
        errorStatus: action.payload,
      });
  }

  return state;
};


export {ActionCreator, Operation, ActionType, AuthorizationStatus, reducer};
