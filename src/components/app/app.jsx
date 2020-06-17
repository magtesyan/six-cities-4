import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import React from "react";


const App = (props) => {
  const {offersCount, offersNames} = props;
  const offerTitleHandler = () => {};

  return (
    <Main
      offersCount={offersCount}
      offersNames={offersNames}
      onOfferTitleClick={offerTitleHandler}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offersNames: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
};

export default App;
