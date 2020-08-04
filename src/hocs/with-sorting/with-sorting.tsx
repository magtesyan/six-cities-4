import * as React from 'react';
import {OfferType} from "../../types";

interface State {
  isFilterOpened: boolean;
  activeSortingOption: string;
}

interface Props {
  activeCity: string;
  className: string;
  isUserAuthorized: boolean;
  offers: OfferType[];
  onCardMouseOver: () => void;
  onFavoriteButtonClick: () => void;
  onOfferTitleClick: () => void;
}

const sortingOptions = [
  {
    name: `Popular`,
  },
  {
    name: `Price: low to high`,
  },
  {
    name: `Price: high to low`,
  },
  {
    name: `Top rated first`,
  },
];

const withSorting = (Component) => {
  class WithSorting extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props);
      this._handleFilterClick = this._handleFilterClick.bind(this);
      this.handleSortTypeClick = this.handleSortTypeClick.bind(this);

      this.state = {
        isFilterOpened: false,
        activeSortingOption: sortingOptions[0].name,
      };
    }

    private _handleFilterClick() {
      this.setState((prevState) => ({
        isFilterOpened: !prevState.isFilterOpened
      }));
    }

    handleSortTypeClick(sortName) {
      this.setState({
        activeSortingOption: sortName
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onFilterClick = {this._handleFilterClick}
          onSortTypeClick={this.handleSortTypeClick}
          activeSortingOption={this.state.activeSortingOption}
          sortingOptions={sortingOptions}
          isFilterOpened={this.state.isFilterOpened}
        />
      );
    }
  }

  return WithSorting;
};

export default withSorting;
