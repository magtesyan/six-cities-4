import * as React from "react";
import {LOGO_TYPE} from "../../const";
import ProfileNavigation from "../profile-navigation/profile-navigation";
import Logo from "../logo/logo";

interface Props {
  authorizationStatus: string;
  email: string;
  errorStatus: boolean;
  onSubmit: ({login, password}: {login: string; password: string}) => void;
  onLogoClick: () => void;
  onEmailClick: () => void;
  onSignInClick: () => void;
}

class SignIn extends React.PureComponent<Props, {}> {
  private loginRef: React.RefObject<HTMLInputElement>;
  private passwordRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();
    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    const {onLogoClick, authorizationStatus, errorStatus, onSignInClick, email, onEmailClick} = this.props;
    const isUserAuthorized = authorizationStatus === `AUTH` ? true : false;
    return (
      <React.Fragment>
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
                  onSubmit={this.handleSubmit}
                >
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">E-mail</label>
                    <input className="login__input form__input" type="email" name="email" placeholder="Email" required={true} ref={this.loginRef}/>
                  </div>
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">Password</label>
                    <input className="login__input form__input" type="password" name="password" placeholder="Password" required={true} ref={this.passwordRef}/>
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
  }
}

export default SignIn;
