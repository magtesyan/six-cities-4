import {getFeedbacks, postFeedbacks} from "../../clients/feedback.js";

const initialState = {
  feedbacks: [],
  formStatus: ``
};

const ActionType = {
  GET_FEEDBACKS: `GET_FEEDBACKS`,
  ADD_FEEDBACK: `ADD_FEEDBACK`,
  CHANGE_FORM_STATUS: `CHANGE_FORM_STATUS`,
};

const ActionCreator = {
  getFeedbacks: (feedbacks) => ({
    type: ActionType.GET_FEEDBACKS,
    payload: feedbacks,
  }),
  addFeedback: (feedbacks) => ({
    type: ActionType.ADD_FEEDBACK,
    payload: feedbacks,
  }),
  changeFormStatus: (status) => ({
    type: ActionType.CHANGE_FORM_STATUS,
    payload: status,
  })
};

const Operation = {
  getFeedbacks: (hotelId) => (dispatch, getState, api) => {
    return getFeedbacks(api, hotelId)
      .then((response) => {
        dispatch(ActionCreator.getFeedbacks(response.data));
      });
  },

  postFeedbacks: (hotelId, postData) => (dispatch, getState, api) => {
    return postFeedbacks(api, hotelId, postData)
      .then((response) => {
        dispatch(ActionCreator.addFeedback(response.data));
        dispatch(ActionCreator.changeFormStatus(``));
      })
      .catch((err) => {
        dispatch(ActionCreator.changeFormStatus(postData.comment));
        throw err;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FEEDBACKS:
      return Object.assign({}, state, {
        feedbacks: action.payload,
      });
    case ActionType.ADD_FEEDBACK:
      return Object.assign({}, state, {
        feedbacks: action.payload
      });
    case ActionType.CHANGE_FORM_STATUS:
      return Object.assign({}, state, {
        formStatus: action.payload
      });

    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
