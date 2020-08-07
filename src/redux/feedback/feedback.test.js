import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, Operation, ActionCreator} from "./feedback.js";

const api = createAPI(jest.fn());

const serverMock = [{
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`,
  id: 1,
  rating: 4,
  user: {
    /* eslint-disable */
    avatar_url: `img/1.png`,
    is_pro: false,
    /* eslint-enable */
    id: 4,
    name: `Max`
  }
}];

const mockFeedback = {
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  rating: 4
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    feedbacks: [],
    formStatus: ``,
    formSubmitBtnStatus: true,
    errorStatus: false
  });
});

it(`Reducer should update feedbacks list by a given value`, () => {
  expect(reducer({
    feedbacks: []
  }, {
    type: ActionType.GET_FEEDBACKS,
    payload: [mockFeedback],
  })).toEqual({
    feedbacks: [mockFeedback],
  });
});

it(`Reducer should add feedback to the list`, () => {
  expect(reducer({
    feedbacks: [mockFeedback]
  }, {
    type: ActionType.ADD_FEEDBACK,
    payload: [mockFeedback, mockFeedback]
  })).toEqual({
    feedbacks: [mockFeedback, mockFeedback],
  });
});

it(`Reducer should change the form status`, () => {
  expect(reducer({
    formStatus: ``
  }, {
    type: ActionType.CHANGE_FORM_STATUS,
    payload: `disabled`,
  })).toEqual({
    formStatus: `disabled`,
  });
});

it(`Reducer should change the form submit button status`, () => {
  expect(reducer({
    formSubmitBtnStatus: true
  }, {
    type: ActionType.CHANGE_FORM_SUBMIT_BTN_STATUS,
    payload: false,
  })).toEqual({
    formSubmitBtnStatus: false,
  });
});


describe(`Feedback operation work correctly`, () => {
  it(`Should make a correct API call to /comments/id`, function () {
    const apiMock = new MockAdapter(api);
    const mockId = 1;
    const dispatch = jest.fn();
    const feedbacksLoader = Operation.getFeedbacks(mockId);

    apiMock
      .onGet(`/comments/${mockId}`)
      .reply(200, serverMock);

    return feedbacksLoader(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1,
          {
            type: ActionType.GET_FEEDBACKS,
            payload: [{
              comment: serverMock[0].comment,
              date: serverMock[0].date,
              id: serverMock[0].id,
              rating: serverMock[0].rating,
              user: {
                avatarUrl: serverMock[0].user.avatar_url,
                isPro: serverMock[0].user.is_pro,
                id: serverMock[0].user.id,
                name: serverMock[0].user.name,
              },
            }]
          }
      );
    });
  });
});

describe(`Feedback action creators work correctly`, () => {
  it(`Action creator for add feedback returns correct action`, () => {
    expect(ActionCreator.addFeedback(mockFeedback)).toEqual({
      type: ActionType.ADD_FEEDBACK,
      payload: mockFeedback,
    });
  });
});
