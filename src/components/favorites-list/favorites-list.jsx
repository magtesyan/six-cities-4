import PropTypes from "prop-types";
import React from "react";

import {OFFER_CARDS_CLASSES} from "../../const.js";
import PlaceCardsList from "../place-cards-list/place-cards-list.jsx";

const FavoritesList = (props) => {
  const {city, isUserAuthorized, offers, onOfferTitleClick, onFavoriteButtonClick, onCardMouseOver} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <PlaceCardsList
          className={OFFER_CARDS_CLASSES.get(`favorites-page`)}
          offers = {offers}
          onOfferTitleClick = {onOfferTitleClick}
          activeCity={city}
          isUserAuthorized={isUserAuthorized}
          onFavoriteButtonClick={onFavoriteButtonClick}
          onCardMouseOver={onCardMouseOver}
        />
      </div>
    </li>
  );
};

FavoritesList.propTypes = {
  city: PropTypes.string,
  onOfferTitleClick: PropTypes.func.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  offers: PropTypes.array,
  isUserAuthorized: PropTypes.bool.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
};

export default FavoritesList;
