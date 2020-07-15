import PropTypes from "prop-types";
import React, {PureComponent} from "react";

import PlaceCard from "../place-card/place-card.jsx";
import PlacesSorting from "../places-sorting/places-sorting.jsx";

class PlaceCardsList extends PureComponent {
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

  render() {
    const {offers, onOfferTitleClick, className, activeCity, onCardMouseOver, onSortTypeClick, onFilterClick, activeSortingOption, sortingOptions, isFilterOpened} = this.props;
    const printPlacesFoundCount = offers.length ? `${offers.length} places to stay in ${activeCity}` : `No places to stay available`;

    const cards = this._sortOffers(offers, activeSortingOption).map((offer) =>
      <PlaceCard
        className = {className}
        offer={offer}
        key={offer.id}
        onOfferTitleClick = {onOfferTitleClick}
        onMouseOver = {onCardMouseOver}
      />
    );

    return (
      <React.Fragment>
        {activeSortingOption && <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{printPlacesFoundCount}</b>
          <PlacesSorting
            onSortTypeClick={onSortTypeClick}
            onFilterClick={onFilterClick}
            sortingOptions={sortingOptions}
            isFilterOpened={isFilterOpened}
            activeSortingOption={activeSortingOption}
          />
          <div className="cities__places-list places__list tabs__content">
            {cards}
          </div>
        </section>}
        {!activeSortingOption && cards}
      </React.Fragment>
    );
  }
}

PlaceCardsList.propTypes = {
  className: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
  onFilterClick: PropTypes.func,
  onSortTypeClick: PropTypes.func,
  activeSortingOption: PropTypes.string,
  sortingOptions: PropTypes.array,
  isFilterOpened: PropTypes.bool,
};

export default PlaceCardsList;
