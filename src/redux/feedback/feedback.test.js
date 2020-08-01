import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, Operation, ActionCreator} from "./feedback.js";

const api = createAPI(() => {});

const serverMock = [{
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`,
  id: 1,
  rating: 4,
  user: {
    avatar_url: `img/1.png`,
    id: 4,
    is_pro: false,
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

describe(`Feedback operation work correctly`, () => {
  it(`Should make a correct API call to /comments/id`, function () {
    const apiMock = new MockAdapter(api);
    const mockId = 1;
    const dispatch = jest.fn();
    const feedbacksLoader = Operation.getFeedbacks(mockId);

    apiMock
      .onGet(`/comments/${mockId}`)
      .reply(200, serverMock);

    return feedbacksLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1,
          {
            type: ActionType.GET_FEEDBACKS,
            payload: serverMock,
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
