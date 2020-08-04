import * as React from "react";

interface Props {
  activeCity: string;
  city: string;
  onCityClick: (city: string) => void;
}

const City: React.FunctionComponent<Props> = (props: Props) => {
  const {city, activeCity, onCityClick} = props;
  const activeCityClass = activeCity === city ? `tabs__item--active` : ``;
  const callCityClick = () => onCityClick(city);

  return (
    <li
      className="locations__item"
      onClick={callCityClick}
    >
      <a className={`locations__item-link tabs__item ${activeCityClass}`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

export default City;
