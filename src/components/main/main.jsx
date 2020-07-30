import PropTypes from "prop-types";
import React from "react";

import {CITY_COORDINATES, OFFER_CARDS_CLASSES, LOGO_TYPE} from "../../const.js";
import CityList from "../city-list/city-list.jsx";
import EmptyScreen from "../empty-screen/empty-screen.jsx";
import Logo from "../logo/logo.jsx";
import Map from "../map/map.jsx";
import PlaceCardsList from "../place-cards-list/place-cards-list.jsx";
import ProfileNavigation from "../profile-navigation/profile-navigation.jsx";
import withSorting from "../../hocs/with-sorting/with-sorting.js";

const PlaceCardsListSorted = withSorting(PlaceCardsList);

const Main = (props) => {
  const {offers, onOfferTitleClick, onCityClick, onCardMouseOver, city, cities, activeOffer, authorizationStatus, onSignInClick, email, onLogoClick, onFavoriteButtonClick, onEmailClick, errorStatus} = props;
  const isOffersEmpty = offers.length === 0;
  const emptyMainClassName = isOffersEmpty ? `page__main--index-empty` : ``;
  const emptyCityPlacesClassName = isOffersEmpty ? `cities__places-container--empty` : ``;
  const isUserAuthorized = authorizationStatus === `AUTH` ? true : false;

  return (
    <div className="page page--gray page--main">
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
              errorStatus={errorStatus}
            />
          </div>
        </div>
      </header>

      <main className={`page__main page__main--index ${emptyMainClassName}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList
            onCityClick={onCityClick}
            activeCity={city}
            cities={cities}
          />
        </div>
        <div className="cities">
          <div className={`cities__places-container ${emptyCityPlacesClassName} container`}>
            {!isOffersEmpty &&
            <PlaceCardsListSorted
              className={OFFER_CARDS_CLASSES.get(`main-page`)}
              offers = {offers}
              onOfferTitleClick = {onOfferTitleClick}
              activeCity={city}
              onCardMouseOver={onCardMouseOver}
              isUserAuthorized={isUserAuthorized}
              onFavoriteButtonClick={onFavoriteButtonClick}
            /> }
            {isOffersEmpty && <EmptyScreen />}
            <div className="cities__right-section">
              {
                !isOffersEmpty &&
                <section className="cities__map map">
                  <Map
                    key={city}
                    city={CITY_COORDINATES.get(city)}
                    offers = {offers}
                    activeOffer={activeOffer}
                  />
                </section> }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onSignInClick: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  city: PropTypes.string,
  activeOffer: PropTypes.object,
  onCardMouseOver: PropTypes.func.isRequired,
  email: PropTypes.string,
  onLogoClick: PropTypes.func.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  onEmailClick: PropTypes.func.isRequired,
  errorStatus: PropTypes.bool.isRequired,
};

export default Main;
