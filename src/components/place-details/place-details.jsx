import PropTypes from "prop-types";
import React from "react";

import FeedbackForm from "../feedback-form/feedback-form.jsx";
import FeedbackList from "../feedback-list/feedback-list.jsx";
import history from "../../history.js";
import Logo from "../logo/logo.jsx";
import Map from "../map/map.jsx";
import PlaceCardsList from "../place-cards-list/place-cards-list.jsx";
import PlaceDetailsGallery from "../place-details-gallery/place-details-gallery.jsx";
import PlaceDetailsFeatures from "../place-details-features/place-details-features.jsx";
import ProfileNavigation from "../profile-navigation/profile-navigation.jsx";
import {AppRoute, RATING_IN_WIDTH_PERCENT, OFFER_CARDS_CLASSES, LOGO_TYPE} from "../../const.js";

const PlaceDetails = (props) => {
  const {
    authorizationStatus,
    city,
    email,
    feedbacks,
    feedbackFormStatus,
    nearestOffers,
    offer,
    onOfferTitleClick,
    onCardMouseOver,
    onEmailClick,
    onSignInClick,
    onSubmitFeedback,
    onLogoClick,
    onFavoriteButtonClick
  } = props;

  const offerRatingStyleWidth = `${offer.rating * RATING_IN_WIDTH_PERCENT}%`;
  const isUserAuthorized = authorizationStatus === `AUTH` ? true : false;
  const favoriteButtonClassName = offer.isFavorite ? `property__bookmark-button--active` : ``;
  const favoriteStatus = offer.isFavorite ? 0 : 1;
  const handleFavoriteButtonClick = () => {
    return isUserAuthorized ? onFavoriteButtonClick(offer, favoriteStatus) : history.push(AppRoute.LOGIN);
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo
              onLogoClick={onLogoClick}
              logoType={LOGO_TYPE.HEADER}
            />
            <ProfileNavigation
              onSignInClick={onSignInClick}
              isUserAuthorized={isUserAuthorized}
              email={email}
              onEmailClick={onEmailClick}
            />
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
                <button
                  className={`property__bookmark-button ${favoriteButtonClassName} button`}
                  type="button"
                  onClick={handleFavoriteButtonClick}
                >
                  <svg className="place-card__bookmark-icon" width="31" height="33">
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
                  <div className={`property__avatar-wrapper ${(offer.host && offer.host.super === 1) ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src="/img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.host ? offer.host.name : ``}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <FeedbackList
                feedbacks={feedbacks}
              />
              {
                isUserAuthorized &&
                <FeedbackForm
                  onSubmitFeedback={onSubmitFeedback}
                  hotelId={offer.id}
                  feedbackFormStatus={feedbackFormStatus}
                />
              }
            </div>
          </div>
          <section className="property__map map">
            {offer.coordinates && <Map
              city={offer.coordinates}
              offers = {nearestOffers.concat([offer])}
              activeOffer={offer}
            />}
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
                isUserAuthorized={isUserAuthorized}
                onFavoriteButtonClick={onFavoriteButtonClick}
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
    isFavorite: PropTypes.bool,
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
  onCardMouseOver: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string,
  feedbacks: PropTypes.array,
  onSignInClick: PropTypes.func.isRequired,
  email: PropTypes.string,
  onSubmitFeedback: PropTypes.func.isRequired,
  feedbackFormStatus: PropTypes.string,
  onLogoClick: PropTypes.func,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  onEmailClick: PropTypes.func.isRequired,
};

export default PlaceDetails;
