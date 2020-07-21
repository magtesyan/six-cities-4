import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.FEEDBACK;

export const getFeedbacks = (state) => {
  return state[NAME_SPACE].feedbacks;
};
