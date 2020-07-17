import {connect} from "react-redux";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import {ActionCreator} from "../../redux/reducer/application/application.js";
// import {AuthorizationStatus} from "../../redux/reducer/user/user.js";
// import {getAuthorizationStatus} from "../../redux/reducer/user/selectors.js";
import {getOffers, getCities} from "../../redux/reducer/data/selectors.js";
import {getStep, getCity, getPlace, getActiveOffer} from "../../redux/reducer/application/selectors.js";
import Main from "../main/main.jsx";
import {ActionCreator as DataActionCreator} from "../../redux/reducer/data/data.js";
// import {Operation as UserOperation} from "../../redux/reducer/user/user.js";
import PlaceDetails from "../place-details/place-details.jsx";


class App extends PureComponent {
  _renderMainScreen() {
    const {offers, onOfferTitleClick, onCityClick, onCardMouseOver, step, city, place, cities, activeOffer} = this.props;
    const activeCity = city === `` ? cities[0] : city;

    if (step === `mainScreen`) {
      return (
        <Main
          offers={offers}
          onOfferTitleClick={onOfferTitleClick}
          onCityClick={onCityClick}
          city={activeCity}
          cities={cities}
          activeOffer={activeOffer}
          onCardMouseOver={onCardMouseOver}
        />
      );
    }

    if (step === `detailsScreen`) {
      return (
        <PlaceDetails
          offer = {place}
          nearestOffers = {offers.slice(0, 3)}
          onOfferTitleClick={onOfferTitleClick}
          city={activeCity}
          onCardMouseOver={onCardMouseOver}
        />
      );
    }
    return null;
  }

  render() {
    const {offers, onOfferTitleClick, place, city, cities, onCardMouseOver} = this.props;
    const activeCity = city === `` ? cities[0] : city;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
          <Route exact path="/details">
            <PlaceDetails
              offer = {place}
              nearestOffers = {offers.slice(0, 3)}
              onOfferTitleClick={onOfferTitleClick}
              city={activeCity}
              onCardMouseOver={onCardMouseOver}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
  step: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  place: PropTypes.object.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeOffer: PropTypes.object
};

const mapStateToProps = (state) => ({
  step: getStep(state),
  city: getCity(state),
  place: getPlace(state),
  offers: getOffers(state),
  cities: getCities(state),
  activeOffer: getActiveOffer(state)
});

const mapDispatchToProps = (dispatch) => ({
  onOfferTitleClick(offer) {
    dispatch(ActionCreator.openDetailsScreen(offer));
  },
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(DataActionCreator.getOffers(city));
  },
  onCardMouseOver(offer) {
    dispatch(ActionCreator.activateOffer(offer));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
