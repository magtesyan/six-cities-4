import PropTypes from "prop-types";
import React, {createRef} from "react";

import {AppRoute, LOGO_TYPE} from "../../const.js";
import history from "../../history.js";
import ProfileNavigation from "../profile-navigation/profile-navigation.jsx";
import Logo from "../logo/logo.jsx";

const SignIn = (props) => {
  const {onSubmit, onLogoClick, authorizationStatus, errorStatus, onSignInClick, email, onEmailClick} = props;
  const isUserAuthorized = authorizationStatus === `AUTH` ? true : false;
  const loginRef = createRef();
  const passwordRef = createRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <React.Fragment>
      {isUserAuthorized && history.push(AppRoute.ROOT)}
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <Logo
                onLogoClick={onLogoClick}
                logoType={LOGO_TYPE.HEADER}
              />
              <ProfileNavigation
                onSignInClick={onSignInClick}
                isUserAuthorized={isUserAuthorized}
                email={email}
                onEmailClick={onEmailClick}
                errorStatus={errorStatus}
              />
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action="#"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" ref={loginRef}/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" ref={passwordRef}/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onLogoClick: PropTypes.func,
  authorizationStatus: PropTypes.string,
  errorStatus: PropTypes.bool.isRequired,
  onEmailClick: PropTypes.func.isRequired,
  onSignInClick: PropTypes.func.isRequired,
  email: PropTypes.string,
};

export default SignIn;
