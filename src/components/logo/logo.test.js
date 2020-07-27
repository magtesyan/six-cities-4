import renderer from "react-test-renderer";
import React from "react";
import {Router} from "react-router-dom";
import history from "../../history.js";
import Logo from "./logo.jsx";

const LOGO_TYPE = {
  HEADER: `header`,
  FOOTER: `footer`
};

it(`Logo is rendered correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <Logo
            onLogoClick={jest.fn()}
            logoType={LOGO_TYPE.HEADER}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
