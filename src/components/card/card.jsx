import PropTypes from "prop-types";
import React from "react";

const RATING_IN_WIDTH_PERCENT = 20;

const Card = (props) => {
  const {name, onOfferTitleClick, price, rating, type, rank, onMouseOver} = props;

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={() => {
        onMouseOver(props);
      }}
    >
      <div className="place-card__mark">
        <span>{rank}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
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
            <span style={{width: `${rating * RATING_IN_WIDTH_PERCENT}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2
          className="place-card__name"
          onClick={onOfferTitleClick}
        >
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
};

export default Card;