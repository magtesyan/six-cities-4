import {connect} from "react-redux";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import {ActionCreator} from "../../redux/application/application.js";
// import {AuthorizationStatus} from "../../redux/user/user.js";
import {getFeedbacks} from "../../redux/feedback/selectors.js";
import {getAuthorizationStatus, getEmail} from "../../redux/user/selectors.js";
import {getOffersByCity, getCities} from "../../redux/data/selectors.js";
import {getStep, getCity, getPlace, getActiveOffer} from "../../redux/application/selectors.js";
import Main from "../main/main.jsx";
import {Operation as UserOperation} from "../../redux/user/user.js";
import {Operation as FeedbackOperation} from "../../redux/feedback/feedback.js";
import PlaceDetails from "../place-details/place-details.jsx";
import SignIn from "../sign-in/sign-in.jsx";


class App extends PureComponent {
  _renderMainScreen() {
    const {offers, onOfferTitleClick, onCityClick, onCardMouseOver, step, city, place, cities, activeOffer, authorizationStatus, login, onSignInClick, email, feedbacks} = this.props;
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
          onSignInClick={onSignInClick}
          authorizationStatus={authorizationStatus}
          offer = {place}
          nearestOffers = {offers.slice(0, 3)}
          onOfferTitleClick={onOfferTitleClick}
          city={activeCity}
          onCardMouseOver={onCardMouseOver}
          feedbacks={feedbacks}
          email={email}
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
    const {login} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
          <Route exact path="/details">
            {this._renderMainScreen()}
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
  feedbacks: PropTypes.array,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  step: getStep(state),
  city: getCity(state),
  place: getPlace(state),
  offers: getOffersByCity(state),
  cities: getCities(state),
  activeOffer: getActiveOffer(state),
  email: getEmail(state),
  feedbacks: getFeedbacks(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSignInClick() {
    dispatch(ActionCreator.openAuthScreen());
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onOfferTitleClick(offer) {
    dispatch(FeedbackOperation.getFeedbacks(offer.id));
    dispatch(ActionCreator.openDetailsScreen(offer));
  },
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  onCardMouseOver(offer) {
    dispatch(ActionCreator.activateOffer(offer));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
