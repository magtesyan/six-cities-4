import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Main from "../main/main.jsx";
import PlaceDetails from "../place-details/place-details.jsx";


class App extends PureComponent {
  constructor(props) {
    super(props);
    const {offers} = this.props;

    this.state = {
      step: `mainScreen`,
      place: offers && offers.length && offers[0]
    };

    this.handleOfferTitle = this.handleOfferTitle.bind(this);
  }

  handleOfferTitle(offer) {
    this.setState(() => ({
      step: `detailsScreen`,
      place: offer
    }));
  }

  _renderMainScreen() {
    const {offers} = this.props;
    const {step} = this.state;

    if (step === `mainScreen`) {
      return (
        <Main
          offers={offers}
          onOfferTitleClick={this.handleOfferTitle}
        />
      );
    }

    if (step === `detailsScreen`) {
      return (
        <PlaceDetails
          offer = {this.state.place}
          nearestOffers = {offers.slice(0, 3)}
          onOfferTitleClick={this.handleOfferTitle}
        />
      );
    }
    return null;
  }

  render() {
    const {offers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
          <Route exact path="/details">
            <PlaceDetails
              offer = {this.state.place}
              nearestOffers = {offers.slice(0, 3)}
              onOfferTitleClick={this.handleOfferTitle}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default App;
