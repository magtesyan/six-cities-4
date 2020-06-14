import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Offers = {
  OFFERS_COUNT: 312
};

ReactDOM.render(
    <App
      offersCount={Offers.OFFERS_COUNT}
    />,
    document.querySelector(`#root`)
);
