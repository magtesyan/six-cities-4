import Adapter from "enzyme-adapter-react-16";
import Enzyme, {mount} from "enzyme";
import * as React from "react";
import PlacesSorting from "./places-sorting";

Enzyme.configure({
  adapter: new Adapter(),
});

const sortingOptions: {name: string}[] = [
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

it(`When sorting dropdown clicked - filterClick callback is called`, () => {
  const onFilterClick = jest.fn();

  const sortingFilter = mount(
      <PlacesSorting
        onSortTypeClick={jest.fn()}
        onFilterClick={onFilterClick}
        sortingOptions={sortingOptions}
        isFilterOpened={true}
        activeSortingOption={sortingOptions[0].name}
      />);

  const article = sortingFilter.find(`.places__sorting-type`);
  article.simulate(`click`);

  expect(onFilterClick).toHaveBeenCalledTimes(1);
});
