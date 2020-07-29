import PropTypes from "prop-types";
import React from "react";

import FavoritesList from "../favorites-list/favorites-list.jsx";
import history from "../../history.js";
import Logo from "../logo/logo.jsx";
import {AppRoute, LOGO_TYPE} from "../../const.js";
import ProfileNavigation from "../profile-navigation/profile-navigation.jsx";

const FavoritesScreen = (props) => {
  const {onLogoClick, onSignInClick, authorizationStatus, email, onEmailClick, favoriteOffers, onOfferTitleClick, onFavoriteButtonClick, onCardMouseOver} = props;
  const isUserAuthorized = authorizationStatus === `AUTH` ? true : false;
  const isThereOffers = (favoriteOffers.size || favoriteOffers.length) > 0;
  const favoriteCities = isThereOffers ? Array.from(favoriteOffers.keys()) : [];

  const favoritesList = favoriteCities.map((city) => {
    const offers = favoriteOffers.length !== 0 ? favoriteOffers.get(city) : [];
    return (
      <FavoritesList
        key={`${city}-favorite-offers`}
        offers={offers}
        isUserAuthorized={isUserAuthorized}
        onFavoriteButtonClick={onFavoriteButtonClick}
        onOfferTitleClick={onOfferTitleClick}
        city={city}
        onCardMouseOver={onCardMouseOver}
      />
    );
  });

  return (
    <React.Fragment>
      {isUserAuthorized || history.push(AppRoute.LOGIN)}
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

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            {isThereOffers &&
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {favoritesList}
                </ul>
              </section>
            }
            {isThereOffers ||
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
                </div>
              </section>
            }
          </div>
        </main>
        <footer className="footer container">
          <Logo
            onLogoClick={onLogoClick}
            logoType={LOGO_TYPE.FOOTER}
          />
        </footer>
      </div>
    </React.Fragment>
  );
};

FavoritesScreen.propTypes = {
  onLogoClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string,
  onSignInClick: PropTypes.func.isRequired,
  email: PropTypes.string,
  onEmailClick: PropTypes.func.isRequired,
  favoriteOffers: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  onOfferTitleClick: PropTypes.func.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
};

export default FavoritesScreen;
