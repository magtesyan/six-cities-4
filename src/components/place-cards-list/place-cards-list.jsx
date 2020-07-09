import PropTypes from "prop-types";
import React, {PureComponent} from "react";

import PlaceCard from "../place-card/place-card.jsx";
import PlacesSorting from "../places-sorting/places-sorting.jsx";

class PlaceCardsList extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSortTypeClick = this.handleSortTypeClick.bind(this);

    this.state = {
      activeCard: null,
      sortType: `Popular`
    };
  }

  _sortOffers(offers, sortName) {
    switch (sortName) {
      case `Price: low to high`:
        return offers.slice().sort((a, b) => a.price - b.price);
      case `Price: high to low`:
        return offers.slice().sort((a, b) => b.price - a.price);
      case `Top rated first`:
        return offers.slice().sort((a, b) => b.rating - a.rating);
      default:
        return offers;
    }
  }

  handleSortTypeClick(sortName) {
    this.setState({
      sortType: sortName
    });
  }

  render() {
    const {offers, onOfferTitleClick, className, activeCity, onCardMouseOver} = this.props;
    const printPlacesFoundCount = offers.length ? `${offers.length} places to stay in ${activeCity}` : `No places to stay available`;

    const cards = this._sortOffers(offers, this.state.sortType).map((offer) =>
      <PlaceCard
        className = {className}
        offer={offer}
        key={offer.id}
        onOfferTitleClick = {onOfferTitleClick}
        onMouseOver = {onCardMouseOver}
      />
    );

    return (
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{printPlacesFoundCount}</b>
        <PlacesSorting
          onSortTypeClick={this.handleSortTypeClick}
        />
        <div className="cities__places-list places__list tabs__content">
          {cards}
        </div>
      </section>
    );
  }
}

PlaceCardsList.propTypes = {
  className: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
};

export default PlaceCardsList;
