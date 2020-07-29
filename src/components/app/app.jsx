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
import {getOffers, getOffersByCity, getCities, getFavoriteCities, getFavoriteOffers, getNearOffers} from "../../redux/data/selectors.js";
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
      favoriteOffers,
      feedbackFormStatus,
      feedbacks,
      fullOffers,
      login,
      nearOffers,
      offers,
      onEmailClick,
      onCityClick,
      onCardMouseOver,
      onFavoriteButtonClick,
      onLogoClick,
      onOfferTitleClick,
      onSignInClick,
      onSubmitFeedback,
    } = this.props;

    const activeCity = city === `` ? cities[0] : city;
    this._renderMainScreen();

    const getOfferById = (id) => {
      return Array.from(fullOffers.values()).reduce((offerCounter, offersArray) =>
        [...offerCounter, ...offersArray.filter((offer) => offer.id === id)], [])[0];
    };

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
              onEmailClick={onEmailClick}
            />
          </Route>
          <Route exact path={`${AppRoute.DETAILS}/:id`} render={(props) => (
            <PlaceDetails
              onSignInClick={onSignInClick}
              authorizationStatus={authorizationStatus}
              nearestOffers={nearOffers.length ? nearOffers : []}
              offer={fullOffers.length !== 0 ? getOfferById(props.match.params.id.toString()) : {}}
              onOfferTitleClick={onOfferTitleClick}
              city={activeCity}
              onCardMouseOver={onCardMouseOver}
              feedbacks={feedbacks}
              email={email}
              onSubmitFeedback={onSubmitFeedback}
              feedbackFormStatus={feedbackFormStatus}
              onLogoClick={onLogoClick}
              onFavoriteButtonClick={onFavoriteButtonClick}
              onEmailClick={onEmailClick}
            />)}>
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <SignIn
              onSubmit={login}
              onLogoClick={onLogoClick}
            />
          </Route>
          <Route exact path={AppRoute.FAVORITES} render={() => (
            <FavoritesScreen
              onLogoClick={onLogoClick}
              onSignInClick={onSignInClick}
              authorizationStatus={authorizationStatus}
              email={email}
              favoriteOffers={favoriteOffers}
              onEmailClick={onEmailClick}
              onOfferTitleClick={onOfferTitleClick}
              onFavoriteButtonClick={onFavoriteButtonClick}
              onCardMouseOver={onCardMouseOver}
            />)}>
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
  onEmailClick: PropTypes.func.isRequired,
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
  fullOffers: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  favoriteOffers: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  nearOffers: PropTypes.array,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  step: getStep(state),
  city: getCity(state),
  place: getPlace(state),
  offers: getOffersByCity(state),
  favoriteOffers: getFavoriteOffers(state),
  fullOffers: getOffers(state),
  cities: getCities(state),
  favoriteCities: getFavoriteCities(state),
  activeOffer: getActiveOffer(state),
  email: getEmail(state),
  feedbacks: getFeedbacks(state),
  feedbackFormStatus: getFeedbackFormStatus(state),
  nearOffers: getNearOffers(state),
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
  onEmailClick() {
    dispatch(DataOperation.getFavoriteOffers());
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
    dispatch(DataOperation.getNearOffers(offer.id));
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
