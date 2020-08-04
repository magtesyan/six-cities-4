import * as renderer from "react-test-renderer";
import * as React from "react";
import {Router} from "react-router-dom";
import history from "../../history";
import SignIn from "./sign-in";

it(`SignIn component render correctly`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <SignIn
          authorizationStatus={`AUTH`}
          onSubmit={jest.fn()}
          onLogoClick={jest.fn()}
          errorStatus={false}
          onEmailClick={jest.fn()}
          onSignInClick={jest.fn()}
          email={`r@r.ru`}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
