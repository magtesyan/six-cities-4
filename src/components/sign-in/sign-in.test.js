import renderer from "react-test-renderer";
import React from "react";
import {Router} from "react-router-dom";
import history from "../../history.js";
import SignIn from "./sign-in.jsx";

it(`SignIn component render correctly`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <SignIn
          onSubmit={jest.fn()}
          onLogoClick={jest.fn()}
          errorStatus={false}
          onEmailClick={jest.fn()}
          onSignInClick={jest.fn()}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
