import PropTypes from "prop-types";
import React from "react";
import {Link} from "react-router-dom";

import {AppRoute, RATING_IN_WIDTH_PERCENT} from "../../const.js";
import history from "../../history.js";
// import SignIn from "../sign-in/sign-in.jsx";

const PlaceCard = (props) => {
  const {offer, onOfferTitleClick, onMouseOver, className, onFavoriteButtonClick, isUserAuthorized} = props;
  const callMouseOver = () => onMouseOver(offer);
  const callOfferTitleClick = () => onOfferTitleClick(offer);
  const offerRatingStyleWidth = `${offer.rating * RATING_IN_WIDTH_PERCENT}%`;
  const favoriteButtonClassName = offer.isFavorite ? `place-card__bookmark-button--active` : ``;
  const favoriteStatus = offer.isFavorite ? 0 : 1;

  const handleFavoriteButtonClick = () => {
    return isUserAuthorized ? onFavoriteButtonClick(offer, favoriteStatus) : history.push(AppRoute.LOGIN);
  };

  return (
    <article
      className={`${className} place-card`}
      onMouseOver={callMouseOver}
    >
      {offer.rank &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`cities__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${favoriteButtonClassName} button`}
            type="button"
            onClick={handleFavoriteButtonClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: offerRatingStyleWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2
          className="place-card__name"
          onClick={callOfferTitleClick}
        >
          <Link to={`/offer/${offer.id}`}>{offer.name}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    rank: PropTypes.bool,
    price: PropTypes.number,
    rating: PropTypes.number,
    isFavorite: PropTypes.bool,
    previewImage: PropTypes.string,
  }),
  onOfferTitleClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  isUserAuthorized: PropTypes.bool.isRequired,
};

export default PlaceCard;
