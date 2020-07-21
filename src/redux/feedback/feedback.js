import {getFeedbacks} from "../../clients/feedback.js";

const initialState = {
  feedbacks: []
};

const ActionType = {
  GET_FEEDBACKS: `GET_FEEDBACKS`,
};

const ActionCreator = {
  getFeedbacks: (feedbacks) => ({
    type: ActionType.GET_FEEDBACKS,
    payload: feedbacks,
  }),
};

const Operation = {
  getFeedbacks: (hotelId) => (dispatch, getState, api) => {
    return getFeedbacks(api, hotelId)
      .then((response) => {
        dispatch(ActionCreator.getFeedbacks(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FEEDBACKS:
      return Object.assign({}, state, {
        feedbacks: action.payload,
      });

    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
