import PropTypes from "prop-types";
import React, {PureComponent} from "react";

import PlaceCard from "../place-card/place-card.jsx";

class PlaceCardsList extends PureComponent {
  constructor(props) {
    super(props);
    this._handleCardMouseOver = this._handleCardMouseOver.bind(this);

    this.state = {
      activeCard: null,
    };
  }

  _handleCardMouseOver(card) {
    this.setState({
      activeCard: card
    });
  }

  render() {
    const {offers, onOfferTitleClick, className} = this.props;
    const cards = offers.map((offer) =>
      <PlaceCard
        className = {className}
        offer={offer}
        key={offer.id}
        onOfferTitleClick = {onOfferTitleClick}
        onMouseOver = {this._handleCardMouseOver}
      />
    );

    return (
      <React.Fragment>
        {cards}
      </React.Fragment>
    );
  }
}

PlaceCardsList.propTypes = {
  className: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};

export default PlaceCardsList;
