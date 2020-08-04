import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.APPLICATION;

export const getStep = (state) => {
  return state[NAME_SPACE].step;
};

export const getCity = (state) => {
  return state[NAME_SPACE].city;
};

export const getPlace = (state) => {
  return state[NAME_SPACE].place;
};

export const getActiveOffer = (state) => {
  return state[NAME_SPACE].activeOffer;
};
