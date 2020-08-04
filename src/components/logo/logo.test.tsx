import * as renderer from "react-test-renderer";
import * as React from "react";
import {Router} from "react-router-dom";
import history from "../../history";
import Logo from "./logo";

const LOGO_TYPE: {HEADER: string; FOOTER: string} = {
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
