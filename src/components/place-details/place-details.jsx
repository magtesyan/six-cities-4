import PropTypes from "prop-types";
import React from "react";

import FeedbackList from "../feedback-list/feedback-list.jsx";
import Map from "../map/map.jsx";
import PlaceCardsList from "../place-cards-list/place-cards-list.jsx";
import PlaceDetailsGallery from "../place-details-gallery/place-details-gallery.jsx";
import PlaceDetailsFeatures from "../place-details-features/place-details-features.jsx";
import {RATING_IN_WIDTH_PERCENT, OFFER_CARDS_CLASSES} from "../../const.js";

const PlaceDetails = (props) => {
  const {offer, nearestOffers, onOfferTitleClick, city, onCardMouseOver} = props;
  const offerRatingStyleWidth = `${offer.rating * RATING_IN_WIDTH_PERCENT}%`;
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <PlaceDetailsGallery
            pictures = {offer.pictures}
          />
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.rank &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.name}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: offerRatingStyleWidth}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.guests} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <PlaceDetailsFeatures
                features = {offer.features}
              />
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${offer.host.super === 1 ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <FeedbackList
                reviews={offer.reviews}
              />
            </div>
          </div>
          <section className="property__map map">
            <Map
              city={offer.coordinates}
              offers = {nearestOffers}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlaceCardsList
                className={OFFER_CARDS_CLASSES.get(`details-page`)}
                offers = {nearestOffers}
                onOfferTitleClick = {onOfferTitleClick}
                activeCity={city}
                onCardMouseOver={onCardMouseOver}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

PlaceDetails.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string,
    coordinates: PropTypes.arrayOf(PropTypes.number),
    name: PropTypes.string,
    type: PropTypes.string,
    rank: PropTypes.bool,
    price: PropTypes.number,
    rating: PropTypes.number,
    pictures: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    bedrooms: PropTypes.number,
    guests: PropTypes.number,
    features: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      super: PropTypes.number,
    }),
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      assessment: PropTypes.number,
      name: PropTypes.string,
      date: PropTypes.date
    }))
  }),
  nearestOffers: PropTypes.array,
  onOfferTitleClick: PropTypes.func.isRequired,
  city: PropTypes.string,
  onCardMouseOver: PropTypes.func.isRequired
};

export default PlaceDetails;
