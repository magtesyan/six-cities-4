import {connect} from "react-redux";
import history from "../../history";
import * as React from "react";
import {Switch, Route, Router} from "react-router-dom";
import {ActionCreator} from "../../redux/application/application";
import {ActionCreator as FeedbackActionCreator} from "../../redux/feedback/feedback";
import {AppRoute} from "../../const";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import {getFeedbacks, getFeedbackFormStatus, getFeedbackSubmitBtnStatus} from "../../redux/feedback/selectors";
import {getAuthorizationStatus, getEmail} from "../../redux/user/selectors";
import {getOffers, getOffersByCity, getCities, getFavoriteCities, getFavoriteOffers, getNearOffers, getError} from "../../redux/data/selectors";
import {getStep, getCity, getPlace, getActiveOffer} from "../../redux/application/selectors";
import {OfferType, FeedbackType, FullOffersType} from "../../types";
import Main from "../main/main";
import {mapValues} from "../../util";
import {Operation as DataOperation} from "../../redux/data/data";
import {Operation as UserOperation} from "../../redux/user/user";
import {Operation as FeedbackOperation} from "../../redux/feedback/feedback";
import PlaceDetails from "../place-details/place-details";
import SignIn from "../sign-in/sign-in";

interface Props {
  activeOffer: OfferType;
  authorizationStatus: string;
  city: string;
  cities: string[];
  email: string;
  errorStatus: boolean;
  favoriteOffers: {}[] | FullOffersType;
  feedbacks: FeedbackType[];
  feedbackFormStatus: string;
  feedbackSubmitBtnStatus: boolean;
  fullOffers: {}[] | FullOffersType;
  login: () => void;
  nearOffers: OfferType[];
  offers: OfferType[];
  onCardMouseOver: () => void;
  onCityClick: () => void;
  onEmailClick: () => void;
  onFavoriteButtonClick: () => void;
  onFeedbackFormChange: () => void;
  onLogoClick: () => void;
  onSubmitFeedback: () => void;
  onSignInClick: () => void;
  onOfferTitleClick: () => void;
  place: OfferType;
  step: string;
}

class App extends React.PureComponent<Props, {}> {
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
      errorStatus,
      favoriteOffers,
      feedbackFormStatus,
      feedbacks,
      feedbackSubmitBtnStatus,
      fullOffers,
      login,
      nearOffers,
      offers,
      onEmailClick,
      onCityClick,
      onCardMouseOver,
      onFavoriteButtonClick,
      onFeedbackFormChange,
      onLogoClick,
      onOfferTitleClick,
      onSignInClick,
      onSubmitFeedback,
    } = this.props;

    const activeCity = city === `` ? cities[0] : city;
    this._renderMainScreen();

    const getOfferById = (id) => {
      return mapValues(fullOffers).reduce((offerCounter: OfferType[], offersArray: OfferType[]) =>
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
              errorStatus={errorStatus}
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
              feedbackSubmitBtnStatus={feedbackSubmitBtnStatus}
              onFeedbackFormChange={onFeedbackFormChange}
              errorStatus={errorStatus}
            />)}>
          </Route>
          <Route exact path={AppRoute.LOGIN} render={() => (
            <SignIn
              onSubmit={login}
              onLogoClick={onLogoClick}
              authorizationStatus={authorizationStatus}
              errorStatus={errorStatus}
              onSignInClick={onSignInClick}
              email={email}
              onEmailClick={onEmailClick}
            />)}>
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
              errorStatus={errorStatus}
            />)}>
          </Route>
        </Switch>
      </Router>
    );
  }
}

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
  feedbackSubmitBtnStatus: getFeedbackSubmitBtnStatus(state),
  errorStatus: getError(state)
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
  onFeedbackFormChange(status) {
    dispatch(FeedbackActionCreator.changeFormSubmitStatus(status));
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
