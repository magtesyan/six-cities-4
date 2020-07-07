import PropTypes from "prop-types";
import React from "react";

const City = (props) => {
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

City.propTypes = {
  city: PropTypes.string,
  activeCity: PropTypes.string,
  onCityClick: PropTypes.func
};

export default City;
