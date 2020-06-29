import PropTypes from "prop-types";
import React from "react";
import shortid from "shortid";

const PlaceDetailsInside = (props) => {
  const {features} = props;

  const featuresList = features.map((feature) => {
    return (
      <li className="property__inside-item" key={shortid.generate()}>
        {feature}
      </li>
    );
  });

  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {featuresList}
      </ul>
    </div>
  );
};

PlaceDetailsInside.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PlaceDetailsInside;
