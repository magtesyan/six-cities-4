import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.FEEDBACK;

export const getFeedbacks = (state) => {
  return state[NAME_SPACE].feedbacks;
};

export const getFeedbackFormStatus = (state) => {
  return state[NAME_SPACE].formStatus;
};

export const getFeedbackSubmitBtnStatus = (state) => {
  return state[NAME_SPACE].formSubmitBtnStatus;
};
