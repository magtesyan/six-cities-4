import React from "react";
import renderer from "react-test-renderer";

import ProfileNavigation from "./profile-navigation.jsx";

const isUserAuthorized = true;
const email = `fff@fff.ru`;

it(`Render Profile Navigation`, () => {
  const tree = renderer
    .create(
        <ProfileNavigation
          onSignInClick={jest.fn()}
          isUserAuthorized={isUserAuthorized}
          email={email}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
