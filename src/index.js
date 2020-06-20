import App from "./components/app/app.jsx";
import {Offers} from "./mocks/offers.js";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <App
      offersCount={Offers.OFFERS_COUNT}
      offersNames={Offers.OFFERS_NAMES}
    />,
    document.querySelector(`#root`)
);
