import PropTypes from "prop-types";
import React from "react";
import {Link} from "react-router-dom";

import {RATING_IN_WIDTH_PERCENT} from "../../const.js";

const PlaceCard = (props) => {
  const {offer, onOfferTitleClick, onMouseOver, className} = props;
  const callMouseOver = () => onMouseOver(offer);
  const callOfferTitleClick = () => onOfferTitleClick(offer);
  const offerRatingStyleWidth = `${offer.rating * RATING_IN_WIDTH_PERCENT}%`;

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
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
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
          <Link to="/details">{offer.name}</Link>
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
  }),
  onOfferTitleClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default PlaceCard;
