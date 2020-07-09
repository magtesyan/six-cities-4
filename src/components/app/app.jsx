import {connect} from "react-redux";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import {ActionCreator} from "../../redux/reducer.js";
import Main from "../main/main.jsx";
import PlaceDetails from "../place-details/place-details.jsx";


class App extends PureComponent {
  _renderMainScreen() {
    const {offers, onOfferTitleClick, onCityClick, step, city, place, cities} = this.props;

    if (step === `mainScreen`) {
      return (
        <Main
          offers={offers}
          onOfferTitleClick={onOfferTitleClick}
          onCityClick={onCityClick}
          city={city}
          cities={cities}
        />
      );
    }

    if (step === `detailsScreen`) {
      return (
        <PlaceDetails
          offer = {place}
          nearestOffers = {offers.slice(0, 3)}
          onOfferTitleClick={onOfferTitleClick}
        />
      );
    }
    return null;
  }

  render() {
    const {offers, onOfferTitleClick, place} = this.props;
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
  step: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  place: PropTypes.object.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
  city: state.city,
  place: state.place,
  offers: state.offers,
  cities: state.cities
});

const mapDispatchToProps = (dispatch) => ({
  onOfferTitleClick(offer) {
    dispatch(ActionCreator.openDetailsScreen(offer));
  },
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
