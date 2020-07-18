import {reducer, ActionType, ActionCreator} from "./application.js";

it(`Reducer should change the city by a given value`, () => {
  expect(reducer({
    city: `Amsterdam`
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Brussels`,
  })).toEqual({
    city: `Brussels`,
  });

  expect(reducer({
    city: `Brussels`
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Amsterdam`,
  })).toEqual({
    city: `Amsterdam`,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city to Brussels returns correct action`, () => {
    expect(ActionCreator.changeCity(`Brussels`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Brussels`,
    });
  });
});
