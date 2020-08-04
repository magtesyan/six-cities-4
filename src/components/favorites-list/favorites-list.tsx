import * as React from "react";
import {OfferType} from "../../types";
import {OFFER_CARDS_CLASSES} from "../../const";
import PlaceCardsList from "../place-cards-list/place-cards-list";

interface Props {
  city: string;
  isUserAuthorized: boolean;
  offers: OfferType[];
  onCardMouseOver: () => void;
  onFavoriteButtonClick: () => void;
  onOfferTitleClick: () => void;
}

const FavoritesList: React.FunctionComponent<Props> = (props: Props) => {
  const {city, isUserAuthorized, offers, onOfferTitleClick, onFavoriteButtonClick, onCardMouseOver} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <PlaceCardsList
          className={OFFER_CARDS_CLASSES.get(`favorites-page`)}
          offers = {offers}
          onOfferTitleClick = {onOfferTitleClick}
          activeCity={city}
          isUserAuthorized={isUserAuthorized}
          onFavoriteButtonClick={onFavoriteButtonClick}
          onCardMouseOver={onCardMouseOver}
        />
      </div>
    </li>
  );
};

export default FavoritesList;
