import * as React from "react";
import PlaceCard from "../place-card/place-card";
import PlacesSorting from "../places-sorting/places-sorting";
import {OfferType, SortingOptionType} from "../../types";

interface Props {
  activeCity: string;
  activeSortingOption?: string;
  className: string;
  isFilterOpened?: boolean;
  isUserAuthorized: boolean;
  offers: OfferType[];
  onOfferTitleClick: () => void;
  onCardMouseOver: () => void;
  onFilterClick?: () => void;
  onSortTypeClick?: () => void;
  onFavoriteButtonClick: (offer: OfferType, favoriteStatus: number) => void;
  sortingOptions?: SortingOptionType[];
}

class PlaceCardsList extends React.PureComponent<Props, {}> {
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
    const {offers, onOfferTitleClick, className, activeCity, onCardMouseOver, onSortTypeClick, onFilterClick, activeSortingOption, sortingOptions, isFilterOpened, isUserAuthorized, onFavoriteButtonClick} = this.props;
    const printPlacesFoundCount = offers.length ? `${offers.length} places to stay in ${activeCity}` : `No places to stay available`;

    const cards = this._sortOffers(offers, activeSortingOption).map((offer) =>
      <PlaceCard
        className = {className}
        offer={offer}
        key={`${offer.id}${offer.price}${offer.name}${offer.previewImage}`}
        onOfferTitleClick = {onOfferTitleClick}
        onMouseOver={onCardMouseOver}
        isUserAuthorized={isUserAuthorized}
        onFavoriteButtonClick={onFavoriteButtonClick}
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

export default PlaceCardsList;
