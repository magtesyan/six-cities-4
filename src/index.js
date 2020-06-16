import App from "./components/app/app.jsx";
import React from "react";
import ReactDOM from "react-dom";
import shortid from "shortid";

const Offers = {
  OFFERS_COUNT: 312,
  OFFERS_NAMES: [
    {
      id: shortid.generate(),
      name: `Beautiful & luxurious apartment at great location`,
    },
    {
      id: shortid.generate(),
      name: `Wood and stone place`,
    },
    {
      id: shortid.generate(),
      name: `Canal View Prinsengracht`,
    },
    {
      id: shortid.generate(),
      name: `Nice, cozy, warm big bed apartment`,
    },
    {
      id: shortid.generate(),
      name: `Wood and stone place`
    }
  ]
};

ReactDOM.render(
    <App
      offersCount={Offers.OFFERS_COUNT}
      offersNames={Offers.OFFERS_NAMES}
    />,
    document.querySelector(`#root`)
);
