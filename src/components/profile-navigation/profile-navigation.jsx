import PropTypes from "prop-types";
import React from "react";

import {AppRoute} from "../../const.js";
import history from "../../history.js";

const ProfileNavigation = (props) => {
  const {onSignInClick, isUserAuthorized, email, onEmailClick} = props;

  const handleSignLinkClick = () => {
    return isUserAuthorized ? handleEmailClick() : onSignInClick();
  };

  const handleEmailClick = () => {
    onEmailClick();
    return history.push(AppRoute.FAVORITES);
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li
          className="header__nav-item user"
          onClick={handleSignLinkClick}
        >
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {isUserAuthorized &&
              <span className="header__user-name user__name">{email}</span>
            }
            {isUserAuthorized ||
              <span className="header__login">Sign in</span>
            }
          </a>
        </li>
      </ul>
    </nav>
  );
};

ProfileNavigation.propTypes = {
  isUserAuthorized: PropTypes.bool.isRequired,
  onSignInClick: PropTypes.func.isRequired,
  email: PropTypes.string,
  onEmailClick: PropTypes.func.isRequired,
};

export default ProfileNavigation;
