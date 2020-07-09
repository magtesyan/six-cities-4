import PropTypes from "prop-types";
import React from "react";

import {CITY_COORDINATES, OFFER_CARDS_CLASSES} from "../../const.js";
import CityList from "../city-list/city-list.jsx";
import Map from "../map/map.jsx";
import PlaceCardsList from "../place-cards-list/place-cards-list.jsx";
import withSorting from "../../hocs/with-sorting.js";

const PlaceCardsListSorted = withSorting(PlaceCardsList);

const Main = (props) => {
  const {offers, onOfferTitleClick, onCityClick, onCardMouseOver, city, cities, activeOffer} = props;

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList
            onCityClick={onCityClick}
            activeCity={city}
            cities={cities}
          />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <PlaceCardsListSorted
              className={OFFER_CARDS_CLASSES.get(`main-page`)}
              offers = {offers}
              onOfferTitleClick = {onOfferTitleClick}
              activeCity={city}
              onCardMouseOver={onCardMouseOver}
            />
            <div className="cities__right-section">
              <section className="cities__map map">
                {
                  offers.length &&
                  <Map
                    key={city}
                    city={CITY_COORDINATES.get(city)}
                    offers = {offers}
                    activeOffer={activeOffer}
                  />
                }
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  activeOffer: PropTypes.object,
  onCardMouseOver: PropTypes.func.isRequired,
};

export default Main;
