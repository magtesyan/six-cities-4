import PropTypes from "prop-types";
import React, {PureComponent} from "react";

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

class PlacesSorting extends PureComponent {
  constructor(props) {
    super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this);

    this.state = {
      isFilterOpened: false,
      activeOption: sortingOptions[0].name
    };
  }

  handleFilterClick() {
    this.setState((prevState) => ({
      isFilterOpened: !prevState.isFilterOpened
    }));
  }

  render() {
    const {onSortTypeClick} = this.props;
    const toggleFilterClass = this.state.isFilterOpened ? `places__options--opened` : ``;
    const renderSortingOptions = sortingOptions.map((option) => {
      const activeOptionClass = (option.name === this.state.activeOption ? `places__option--active` : ``);

      const callSortTypeClick = () => {
        onSortTypeClick(option.name);
        this.setState({
          activeOption: option.name
        });
      };

      return (
        <li
          className={`places__option ${activeOptionClass}`}
          tabIndex="0"
          key={option.name}
          onClick={callSortTypeClick}
        >
          {option.name}
        </li>
      );
    });

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span
          className="places__sorting-type"
          tabIndex="0"
          onClick={this.handleFilterClick}
        >
          {this.state.activeOption}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul
          className={`places__options places__options--custom ${toggleFilterClass}`}
          onClick={this.handleFilterClick}
        >
          {renderSortingOptions}
        </ul>
      </form>
    );
  }
}

PlacesSorting.propTypes = {
  onSortTypeClick: PropTypes.func.isRequired
};


export default PlacesSorting;
