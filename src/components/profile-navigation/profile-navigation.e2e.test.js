import Adapter from "enzyme-adapter-react-16";
import {Router} from "react-router-dom";
import Enzyme, {mount} from "enzyme";
import React from "react";
import history from "../../history.js";
import ProfileNavigation from "./profile-navigation.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const email = `fff@fff.ru`;

describe(`Profile Navigation works correctly`, () => {
  it(`When click email onEmailClick callback is returned if user authorized`, () => {
    const onEmailClick = jest.fn();
    const isUserAuthorized = true;

    const profileBlock = mount(
        <Router
          history={history}
        >
          <ProfileNavigation
            onSignInClick={jest.fn()}
            isUserAuthorized={isUserAuthorized}
            email={email}
            onEmailClick={onEmailClick}
            errorStatus={false}
          />
        </Router>);

    const emailLink = profileBlock.find(`li`);
    emailLink.simulate(`click`);

    expect(onEmailClick).toHaveBeenCalledTimes(1);
  });
});
