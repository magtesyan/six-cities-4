import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Offers = {
  OFFERS_COUNT: 312,
  OFFERS_NAMES: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`
  ]
};

ReactDOM.render(
    <App
      offersCount={Offers.OFFERS_COUNT}
      offersNames={Offers.OFFERS_NAMES}
    />,
    document.querySelector(`#root`)
);
