import React, {PureComponent} from 'react';

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
  class WithSorting extends PureComponent {
    constructor(props) {
      super(props);
      this.handleFilterClick = this.handleFilterClick.bind(this);
      this.handleSortTypeClick = this.handleSortTypeClick.bind(this);

      this.state = {
        isFilterOpened: false,
        activeSortingOption: sortingOptions[0].name,
      };
    }

    handleFilterClick() {
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
          onFilterClick = {this.handleFilterClick}
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
