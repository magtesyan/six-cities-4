import PropTypes from "prop-types";
import React from "react";

import City from "../city/city.jsx";

const CityList = (props) => {
  const {fullOffers, onCityClick, activeCity} = props;
  const cities = Array.from(fullOffers.keys());
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
  fullOffers: PropTypes.instanceOf(Map).isRequired,
  onCityClick: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired
};

export default CityList;
