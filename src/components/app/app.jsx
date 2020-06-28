import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import React from "react";


const App = (props) => {
  const {offers} = props;
  const offerTitleHandler = () => {};

  return (
    <Main
      offers={offers}
      onOfferTitleClick={offerTitleHandler}
    />
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default App;
