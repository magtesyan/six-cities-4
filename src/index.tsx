import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import * as React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import App from "./components/app/app";
import {createAPI} from "./api";
import {Operation as DataOperation} from "./redux/data/data";
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from "./redux/user/user";
import reducer from "./redux/reducer";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(UserOperation.checkAuth())
.then(() => {
  store.dispatch(DataOperation.getOffers());
  if (store.getState()[`USER`].authorizationStatus === `AUTH`) {
    (store.dispatch(DataOperation.getFavoriteOffers()));
  }
  ReactDOM.render(
      <Provider store={store}>
        <App />,
      </Provider>,
      document.querySelector(`#root`)
  );
});
