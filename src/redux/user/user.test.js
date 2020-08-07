import {createAPI} from "../../api.js";
import MockAdapter from "axios-mock-adapter";
import {reducer, ActionCreator, ActionType, AuthorizationStatus, Operation} from "./user.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorStatus: false
  });
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });
});

it(`Reducer should change email by a given value`, () => {
  expect(reducer({
    email: `ee@ee.ru`,
  }, {
    type: ActionType.SET_EMAIL,
    payload: `ee@ee.ru`,
  })).toEqual({
    email: `ee@ee.ru`,
  });
});

it(`Reducer should change error status by a given value`, () => {
  expect(reducer({
    errorStatus: true,
  }, {
    type: ActionType.SET_ERROR,
    payload: true,
  })).toEqual({
    errorStatus: true,
  });
});

describe(`User Reducer Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`Action creator set email returnc correct action`, () => {
    expect(ActionCreator.setEmail(`r@r.ru`)).toEqual({
      type: ActionType.SET_EMAIL,
      payload: `r@r.ru`
    });
  });

  it(`Action creator set error returns correct action`, () => {
    expect(ActionCreator.setError(true)).toEqual({
      type: ActionType.SET_ERROR,
      payload: true
    });

    expect(ActionCreator.setError(false)).toEqual({
      type: ActionType.SET_ERROR,
      payload: false
    });
  });
});

const api = createAPI(jest.fn());

const serverMockcall = {
  email: `r@r.ru`,
  status: AuthorizationStatus.AUTH
};

const serverMockWrongCall = {
  wrongOne: `r@r.ru`,
  wrongTwo: AuthorizationStatus.AUTH
};

const serverMockPost = {
  login: `r@r.ru`,
  password: `password`
};

describe(`User operation work correctly`, () => {
  it(`Should make a correct API call to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const profileLoader = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, serverMockcall);

    return profileLoader(dispatch, dispatch, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1,
            {
              type: ActionType.SET_EMAIL,
              payload: serverMockcall.email,
            }
        );
        expect(dispatch).toHaveBeenNthCalledWith(2,
            {
              type: ActionType.REQUIRED_AUTHORIZATION,
              payload: serverMockcall.status,
            }
        );
      });
  });

  it(`Should return error when API call to /login is incorrect`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const profileLoader = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(400, serverMockWrongCall);

    return profileLoader(dispatch, dispatch, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1,
            {
              type: ActionType.SET_ERROR,
              payload: true,
            }
        );
      });
  });

  it(`Should make a correct API post to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const login = Operation.login(serverMockPost);

    apiMock
      .onPost(`/login`)
      .reply(200, serverMockPost);

    return login(dispatch, dispatch, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1,
            {
              type: ActionType.REQUIRED_AUTHORIZATION,
              payload: serverMockcall.status,
            }
        );
        expect(dispatch).toHaveBeenNthCalledWith(2,
            {
              type: ActionType.SET_EMAIL,
              payload: serverMockPost.login,
            }
        );
      });
  });

  it(`Should return error when API post call to /login is incorrect`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const login = Operation.login(serverMockWrongCall);

    apiMock
      .onPost(`/login`)
      .reply(400, serverMockWrongCall);

    return login(dispatch, dispatch, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1,
            {
              type: ActionType.SET_ERROR,
              payload: true,
            }
        );
      });
  });
});
