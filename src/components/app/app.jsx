import {connect} from "react-redux";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import {ActionCreator} from "../../redux/application/application.js";
// import {AuthorizationStatus} from "../../redux/user/user.js";
import {getAuthorizationStatus, getEmail} from "../../redux/user/selectors.js";
import {getOffersByCity, getCities} from "../../redux/data/selectors.js";
import {getStep, getCity, getPlace, getActiveOffer} from "../../redux/application/selectors.js";
import Main from "../main/main.jsx";
import {ActionCreator as DataActionCreator} from "../../redux/data/data.js";
import {Operation as UserOperation} from "../../redux/user/user.js";
import PlaceDetails from "../place-details/place-details.jsx";
import SignIn from "../sign-in/sign-in.jsx";


class App extends PureComponent {
  _renderMainScreen() {
    const {offers, onOfferTitleClick, onCityClick, onCardMouseOver, step, city, place, cities, activeOffer, authorizationStatus, login, onSignInClick, email} = this.props;
    const activeCity = city === `` ? cities[0] : city;

    if (step === `mainScreen`) {
      return (
        <Main
          onSignInClick={onSignInClick}
          authorizationStatus={authorizationStatus}
          offers={offers}
          onOfferTitleClick={onOfferTitleClick}
          onCityClick={onCityClick}
          city={activeCity}
          cities={cities}
          activeOffer={activeOffer}
          onCardMouseOver={onCardMouseOver}
          email={email}
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

    if (step === `authScreen`) {
      return (
        <SignIn
          onSubmit={login}
        />
      );
    }
    return null;
  }

  render() {
    const {offers, onOfferTitleClick, place, city, cities, onCardMouseOver, login} = this.props;
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
          <Route exact path="/dev-auth">
            <SignIn
              onSubmit={login}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  onSignInClick: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
  step: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  place: PropTypes.object.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeOffer: PropTypes.object,
  email: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  step: getStep(state),
  city: getCity(state),
  place: getPlace(state),
  offers: getOffersByCity(state),
  cities: getCities(state),
  activeOffer: getActiveOffer(state),
  email: getEmail(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSignInClick() {
    dispatch(ActionCreator.openAuthScreen());
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onOfferTitleClick(offer) {
    dispatch(ActionCreator.openDetailsScreen(offer));
  },
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(DataActionCreator.getOffersByCity());
  },
  onCardMouseOver(offer) {
    dispatch(ActionCreator.activateOffer(offer));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
