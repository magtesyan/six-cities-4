import * as React from "react";
import {SortingOptionType} from "../../types";

interface Props {
  activeSortingOption: string;
  isFilterOpened: boolean;
  onSortTypeClick: (sortingName: string) => void;
  onFilterClick: () => void;
  sortingOptions: SortingOptionType[];
}

const PlacesSorting: React.FunctionComponent<Props> = (props: Props) => {
  const {onSortTypeClick, onFilterClick, sortingOptions, isFilterOpened, activeSortingOption} = props;
  const toggleFilterClass = isFilterOpened ? `places__options--opened` : ``;
  const renderSortingOptions = sortingOptions.map((option) => {
    const activeOptionClass = (option.name === activeSortingOption ? `places__option--active` : ``);

    const callSortTypeClick = () => {
      onSortTypeClick(option.name);
    };

    return (
      <li
        className={`places__option ${activeOptionClass}`}
        tabIndex={0}
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
        tabIndex={0}
        onClick={onFilterClick}
      >
        {activeSortingOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${toggleFilterClass}`}
        onClick={onFilterClick}
      >
        {renderSortingOptions}
      </ul>
    </form>
  );
};

export default PlacesSorting;
