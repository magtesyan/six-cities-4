import * as React from "react";
import {AppRoute} from "../../const";
import history from "../../history";

interface Props {
  email: string;
  errorStatus: boolean;
  isUserAuthorized: boolean;
  onSignInClick: () => void;
  onEmailClick: () => void;
}

const ProfileNavigation: React.FunctionComponent<Props> = (props: Props) => {
  const {onSignInClick, isUserAuthorized, email, onEmailClick, errorStatus} = props;

  const handleSignLinkClick = () => {
    return isUserAuthorized ? handleEmailClick() : onSignInClick();
  };

  const error = errorStatus ? `Server error` : ``;

  const handleEmailClick = () => {
    onEmailClick();
    return history.push(AppRoute.FAVORITES);
  };

  return (
    <nav className="header__nav">
      <div style={{fontSize: `20px`, color: `red`}}>
        {error}
      </div>
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

export default ProfileNavigation;
