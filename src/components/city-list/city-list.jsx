import PropTypes from "prop-types";
import React from "react";

import City from "../city/city.jsx";

const CityList = (props) => {
  const {cities, onCityClick, activeCity} = props;
  const renderCities = cities.map((city) => {
    return (
      <City
        key={city}
        city={city}
        activeCity={activeCity}
        onCityClick={onCityClick}
      />
    );
  });

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {renderCities}
      </ul>
    </section>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired
};

export default CityList;
