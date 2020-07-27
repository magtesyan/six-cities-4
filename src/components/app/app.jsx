import {connect} from "react-redux";
import history from "../../history.js";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {Switch, Route, Router} from "react-router-dom";

import {ActionCreator} from "../../redux/application/application.js";
import {ActionCreator as FeedbackActionCreator} from "../../redux/feedback/feedback.js";
import {AppRoute} from "../../const.js";
import FavoritesScreen from "../favorites-screen/favorites-screen.jsx";
import {getFeedbacks, getFeedbackFormStatus} from "../../redux/feedback/selectors.js";
import {getAuthorizationStatus, getEmail} from "../../redux/user/selectors.js";
import {getOffersByCity, getCities} from "../../redux/data/selectors.js";
import {getStep, getCity, getPlace, getActiveOffer} from "../../redux/application/selectors.js";
import Main from "../main/main.jsx";
import {Operation as DataOperation} from "../../redux/data/data.js";
import {Operation as UserOperation} from "../../redux/user/user.js";
import {Operation as FeedbackOperation} from "../../redux/feedback/feedback.js";
import PlaceDetails from "../place-details/place-details.jsx";
import SignIn from "../sign-in/sign-in.jsx";


class App extends PureComponent {
  _renderMainScreen() {
    const {step} = this.props;

    if (step === `mainScreen`) {
      return history.push(AppRoute.ROOT);
    }

    if (step === `detailsScreen`) {
      return history.push(AppRoute.DETAILS);
    }

    if (step === `authScreen`) {
      return history.push(AppRoute.LOGIN);
    }
    return null;
  }

  render() {
    const {
      activeOffer,
      authorizationStatus,
      cities,
      city,
      email,
      feedbackFormStatus,
      feedbacks,
      login,
      offers,
      onOfferTitleClick,
      onCityClick,
      onCardMouseOver,
      onSignInClick,
      onSubmitFeedback,
      onLogoClick,
      onFavoriteButtonClick,
      place,
    } = this.props;

    const activeCity = city === `` ? cities[0] : city;
    this._renderMainScreen();
    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.ROOT}>
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
              onLogoClick={onLogoClick}
              onFavoriteButtonClick={onFavoriteButtonClick}
            />
          </Route>
          <Route exact path={AppRoute.DETAILS}>
            <PlaceDetails
              onSignInClick={onSignInClick}
              authorizationStatus={authorizationStatus}
              offer={place}
              nearestOffers={offers.slice(0, 3)}
              onOfferTitleClick={onOfferTitleClick}
              city={activeCity}
              onCardMouseOver={onCardMouseOver}
              feedbacks={feedbacks}
              email={email}
              onSubmitFeedback={onSubmitFeedback}
              feedbackFormStatus={feedbackFormStatus}
              onLogoClick={onLogoClick}
              onFavoriteButtonClick={onFavoriteButtonClick}
            />
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <SignIn
              onSubmit={login}
              onLogoClick={onLogoClick}
            />
          </Route>
          <Route exact path={AppRoute.FAVORITES}>
            <FavoritesScreen
              onLogoClick={onLogoClick}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  onSubmitFeedback: PropTypes.func.isRequired,
  onSignInClick: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onLogoClick: PropTypes.func.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
  step: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  place: PropTypes.object.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeOffer: PropTypes.object,
  email: PropTypes.string,
  feedbacks: PropTypes.array,
  feedbackFormStatus: PropTypes.string,
  onFavoriteButtonClick: PropTypes.func.isRequired,
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
  feedbacks: getFeedbacks(state),
  feedbackFormStatus: getFeedbackFormStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteButtonClick(offer, status) {
    dispatch(DataOperation.changeActiveOfferFavoriteStatus(offer.id, status));
  },
  onLogoClick() {
    dispatch(ActionCreator.openMainScreen());
  },
  onSignInClick() {
    dispatch(ActionCreator.openAuthScreen());
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onSubmitFeedback(hotelId, feedbackData) {
    dispatch(FeedbackActionCreator.changeFormStatus(`disabled`));
    dispatch(FeedbackOperation.postFeedbacks(hotelId, feedbackData));
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
