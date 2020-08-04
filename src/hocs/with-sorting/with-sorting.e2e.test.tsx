import Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import Enzyme, {configure, mount} from "enzyme";
import withSorting from "./with-sorting";
import {OfferType} from "../../types";

Enzyme.configure({
  adapter: new Adapter(),
});

configure({adapter: new Adapter()});

interface Props {
  onSortTypeClick: (sortingOption: string) => void;
}

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

const CardsList = (props: Props) => {
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

const offers: OfferType[] = [
  {
    id: `1`,
    name: `Beautiful & luxurious apartment at great location`,
    price: 80,
    rating: 1,
    type: `Apartment`,
    rank: `2`,
    pictures: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    bedrooms: 1,
    guests: 5,
    features: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      id: `100`,
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      super: 1,
    },
    coordinates: [52.3909553943508, 4.85309666406198],
    reviews: [
      {
        id: `2`,
        text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
        assessment: 5,
        name: `Francis`,
        date: new Date(2020, 0, 1)
      },
      {
        id: `3`,
        text: `We like the beach view.`,
        assessment: 4,
        name: `Marjorie`,
        date: new Date(2019, 1, 2)
      },
      {
        id: `4`,
        text: `Great location! I was very pleased with this condo. May I suggest bar height table and chairs for the patio for better beach viewing? Very clean and had everything we needed and then some!`,
        assessment: 3,
        name: `Amy`,
        date: new Date(2017, 3, 13)
      },
      {
        id: `5`,
        text: `Very nice accommodations and would definitely recommend.`,
        assessment: 2,
        name: `Lori`,
        date: new Date(2018, 2, 3)
      },
    ],
    isFavorite: true,
    city: `Amsterdam`,
    previewImage: `src.jpg`
  },
  {
    id: `6`,
    name: `Wood and stone place`,
    price: 90,
    rating: 2,
    type: `Private Room`,
    rank: `3`,
    pictures: [
      `img/room.jpg`,
    ],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    bedrooms: 2,
    guests: 4,
    features: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
    ],
    host: {
      id: `102`,
      avatar: `img/avatar-angelina.jpg`,
      name: `Sindi`,
      super: 0,
    },
    coordinates: [52.369553943508, 4.85309666406198],
    reviews: [
      {
        id: `7`,
        text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
        assessment: 5,
        name: `Francis`,
        date: new Date(2020, 0, 1)
      },
      {
        id: `8`,
        text: `We like the beach view.`,
        assessment: 4,
        name: `Marjorie`,
        date: new Date(2019, 1, 2)
      },
      {
        id: `9`,
        text: `Great location! I was very pleased with this condo. May I suggest bar height table and chairs for the patio for better beach viewing? Very clean and had everything we needed and then some!`,
        assessment: 3,
        name: `Amy`,
        date: new Date(2017, 3, 13)
      },
      {
        id: `10`,
        text: `Very nice accommodations and would definitely recommend.`,
        assessment: 2,
        name: `Lori`,
        date: new Date(2018, 2, 3)
      },
    ],
    isFavorite: true,
    city: `Amsterdam`,
    previewImage: `src.jpg`
  },
  {
    id: `11`,
    name: `Canal View Prinsengracht`,
    price: 100,
    rating: 3,
    type: `Apartment`,
    rank: `4`,
    pictures: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    bedrooms: 3,
    guests: 3,
    features: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
    ],
    host: {
      id: `103`,
      avatar: `img/avatar-angelina.jpg`,
      name: `Joanna`,
      super: 1,
    },
    coordinates: [52.3909553943508, 4.929309666406198],
    reviews: [
      {
        id: `12`,
        text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
        assessment: 5,
        name: `Francis`,
        date: new Date(2020, 0, 1)
      },
      {
        id: `13`,
        text: `We like the beach view.`,
        assessment: 4,
        name: `Marjorie`,
        date: new Date(2019, 1, 2)
      },
      {
        id: `14`,
        text: `Great location! I was very pleased with this condo. May I suggest bar height table and chairs for the patio for better beach viewing? Very clean and had everything we needed and then some!`,
        assessment: 3,
        name: `Amy`,
        date: new Date(2017, 3, 13)
      },
      {
        id: `15`,
        text: `Very nice accommodations and would definitely recommend.`,
        assessment: 2,
        name: `Lori`,
        date: new Date(2018, 2, 3)
      },
    ],
    isFavorite: true,
    city: `Amsterdam`,
    previewImage: `src.jpg`
  },
  {
    id: `16`,
    name: `Nice, cozy, warm big bed apartment`,
    price: 110,
    rating: 4,
    type: `Private Room`,
    rank: `5`,
    pictures: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    bedrooms: 4,
    guests: 2,
    features: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
    ],
    host: {
      id: `105`,
      avatar: `img/avatar-angelina.jpg`,
      name: `Eva`,
      super: 0,
    },
    coordinates: [52.3809553943508, 4.939309666406198],
    reviews: [
      {
        id: `17`,
        text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
        assessment: 5,
        name: `Francis`,
        date: new Date(2020, 0, 1)
      },
      {
        id: `18`,
        text: `We like the beach view.`,
        assessment: 4,
        name: `Marjorie`,
        date: new Date(2019, 1, 2)
      },
      {
        id: `19`,
        text: `Great location! I was very pleased with this condo. May I suggest bar height table and chairs for the patio for better beach viewing? Very clean and had everything we needed and then some!`,
        assessment: 3,
        name: `Amy`,
        date: new Date(2017, 3, 13)
      },
      {
        id: `20`,
        text: `Very nice accommodations and would definitely recommend.`,
        assessment: 2,
        name: `Lori`,
        date: new Date(2018, 2, 3)
      },
    ],
    isFavorite: true,
    city: `Amsterdam`,
    previewImage: `src.jpg`
  },
  {
    id: `21`,
    name: `Wood and stone place`,
    price: 120,
    rating: 5,
    type: `Apartment`,
    rank: `1`,
    pictures: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
    ],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    bedrooms: 5,
    guests: 1,
    features: [
      `Wi-Fi`,
      `Washing machine`,
    ],
    host: {
      id: `106`,
      avatar: `img/avatar-angelina.jpg`,
      name: `Marta`,
      super: 1,
    },
    coordinates: [52.3909553943508, 4.85309666406198],
    reviews: [
      {
        id: `22`,
        text: `Everything. It was really really nice to get away and feel so comfortable where we was. My kids and I had a great time.`,
        assessment: 5,
        name: `Francis`,
        date: new Date(2020, 0, 1)
      },
      {
        id: `23`,
        text: `We like the beach view.`,
        assessment: 4,
        name: `Marjorie`,
        date: new Date(2019, 1, 2)
      },
      {
        id: `24`,
        text: `Great location! I was very pleased with this condo. May I suggest bar height table and chairs for the patio for better beach viewing? Very clean and had everything we needed and then some!`,
        assessment: 3,
        name: `Amy`,
        date: new Date(2017, 3, 13)
      },
      {
        id: `25`,
        text: `Very nice accommodations and would definitely recommend.`,
        assessment: 2,
        name: `Lori`,
        date: new Date(2018, 2, 3)
      },
    ],
    isFavorite: true,
    city: `Amsterdam`,
    previewImage: `src.jpg`
  }
];

describe(`withSorting Hoc testing`, () => {
  it(`Active sorting type is changed when clicked on dropdown option`, () => {
    const CardsListSorted = withSorting(CardsList);

    const sorted = mount(
        <CardsListSorted
          activeCity={`Amsterdam`}
          className={`near-places__card`}
          isUserAuthorized={true}
          offers={offers}
          onCardMouseOver={jest.fn()}
          onFavoriteButtonClick={jest.fn()}
          onOfferTitleClick={jest.fn()}
        />
    );

    const cardsListComponent = sorted.find(CardsListSorted);
    const sortingItem = sorted.find(`.places__option`).at(1);
    sortingItem.simulate(`click`);
    const sortingType = cardsListComponent.state().activeSortingOption;
    expect(sortingType).toBe(sortingOptions[1].name);
  });
});
