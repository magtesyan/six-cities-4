import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

export const getCity = (state) => {
  return state[NameSpace.APPLICATION].city;
};

export const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getNearOffers = (state) => {
  return state[NameSpace.DATA].nearOffers;
};

export const getFavoriteOffers = (state) => {
  return state[NameSpace.DATA].favoriteOffers;
};

export const getCities = (state) => {
  return state[NameSpace.DATA].cities;
};

export const getFavoriteCities = (state) => {
  return state[NameSpace.DATA].favoriteCities;
};

export const getOffersByCity = createSelector(
    getOffers,
    getCity,
    getCities,
    (offers, city, cities) => {
      const activeCity = city || cities[0];
      const offersByCity = offers.length === 0 ? offers : offers.get(activeCity);
      return offersByCity;
    }
);
