import * as React from "react";
import {AppRoute, LOGO_TYPE} from "../../const";
import history from "../../history";
import Logo from "../logo/logo";
import {getMapValuesByKey, mapKeys, mapSize} from "../../util";
import FavoritesList from "../favorites-list/favorites-list";
import {FullOffersType} from "../../types";
import ProfileNavigation from "../profile-navigation/profile-navigation";

interface Props {
  authorizationStatus: string;
  email: string;
  errorStatus: boolean;
  favoriteOffers: {}[] | FullOffersType;
  onCardMouseOver: () => void;
  onEmailClick: () => void;
  onFavoriteButtonClick: () => void;
  onLogoClick: () => void;
  onOfferTitleClick: () => void;
  onSignInClick: () => void;
}

const FavoritesScreen: React.FunctionComponent<Props> = (props: Props) => {
  const {onLogoClick, onSignInClick, authorizationStatus, email, onEmailClick, favoriteOffers, onOfferTitleClick, onFavoriteButtonClick, onCardMouseOver, errorStatus} = props;
  const isUserAuthorized = authorizationStatus === `AUTH` ? true : false;
  const isThereOffers = (mapSize(favoriteOffers) || favoriteOffers.length) > 0;
  const favoriteCities = isThereOffers ? mapKeys(favoriteOffers) : [];

  const favoritesList = favoriteCities.map((city) => {
    const offers = favoriteOffers.length !== 0 ? getMapValuesByKey(favoriteOffers, city) : [];
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
                errorStatus={errorStatus}
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

export default FavoritesScreen;
