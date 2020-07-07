import {connect} from "react-redux";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import {ActionCreator} from "../../redux/reducer.js";
import Main from "../main/main.jsx";
import PlaceDetails from "../place-details/place-details.jsx";


class App extends PureComponent {
  _renderMainScreen() {
    const {fullOffers, onOfferTitleClick, onCityClick, step, city, place} = this.props;
    const offers = fullOffers.get(city);

    if (step === `mainScreen`) {
      return (
        <Main
          fullOffers={fullOffers}
          offers={offers}
          onOfferTitleClick={onOfferTitleClick}
          onCityClick={onCityClick}
          city={city}
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
    const {fullOffers, onOfferTitleClick, city, place} = this.props;
    const offers = fullOffers.get(city);
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
  fullOffers: PropTypes.instanceOf(Map).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  step: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  place: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
  city: state.city,
  place: state.place
});

const mapDispatchToProps = (dispatch) => ({
  onOfferTitleClick(offer) {
    dispatch(ActionCreator.openDetailsScreen(offer));
  },
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
