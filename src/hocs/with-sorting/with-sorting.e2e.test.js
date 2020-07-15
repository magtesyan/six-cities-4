import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Enzyme, {configure, mount} from "enzyme";
import PropTypes from "prop-types";

import withSorting from "./with-sorting.js";

Enzyme.configure({
  adapter: new Adapter(),
});

configure({adapter: new Adapter()});

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

const CardsList = (props) => {
  const {onSortTypeClick} = props;

  return (
    <React.Fragment>
      <ul>
        <li className={`places__option`} onClick={() => onSortTypeClick(sortingOptions[0].name)}>{sortingOptions[0].name}</li>
        <li className={`places__option`} onClick={() => onSortTypeClick(sortingOptions[1].name)}>{sortingOptions[1].name}</li>
        <li className={`places__option`} onClick={() => onSortTypeClick(sortingOptions[2].name)}>{sortingOptions[2].name}</li>
        <li className={`places__option`} onClick={() => onSortTypeClick(sortingOptions[3].name)}>{sortingOptions[3].name}</li>
      </ul>
    </React.Fragment>
  );
};

CardsList.propTypes = {
  onSortTypeClick: PropTypes.func.isRequired,
};

describe(`withSorting Hoc testing`, () => {
  it(`Active sorting type is changed when clicked on dropdown option`, () => {
    const CardsListSorted = withSorting(CardsList);

    const sorted = mount(
        <CardsListSorted
          onSortTypeClick={jest.fn((x)=>x)}
        />
    );

    const cardsListComponent = sorted.find(CardsListSorted);
    const sortingItem = sorted.find(`.places__option`).at(1);
    sortingItem.simulate(`click`);
    const sortingType = cardsListComponent.state().activeSortingOption;
    expect(sortingType).toBe(sortingOptions[1].name);
  });
});
