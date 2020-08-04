import * as React from "react";
import City from "../city/city";

interface Props {
  activeCity: string;
  cities: string[];
  onCityClick: () => void;
}

const CityList: React.FunctionComponent<Props> = (props: Props) => {
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

export default CityList;
