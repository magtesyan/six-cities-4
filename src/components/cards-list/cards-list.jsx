import Card from "../card/card.jsx";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";

class CardsList extends PureComponent {
  constructor(props) {
    super(props);
    this._cardMouseOverHandler = this._cardMouseOverHandler.bind(this);

    this.state = {
      activeCard: null,
    };
  }

  _cardMouseOverHandler(card) {
    this.setState({
      activeCard: card
    });
  }

  render() {
    const {offersNames, onOfferTitleClick} = this.props;
    const cards = offersNames.map((offerName) =>
      <Card
        name={offerName.name}
        key={offerName.id}
        price={offerName.price}
        rating={offerName.rating}
        type={offerName.type}
        rank={offerName.rank}
        onOfferTitleClick = {onOfferTitleClick}
        onMouseOver = {this._cardMouseOverHandler}
      />
    );

    return (
      <React.Fragment>
        {cards}
      </React.Fragment>
    );
  }
}

CardsList.propTypes = {
  offersNames: PropTypes.arrayOf(PropTypes.object).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};

export default CardsList;
