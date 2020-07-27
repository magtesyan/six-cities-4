import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

import {AppRoute, LOGO_SIZE} from "../../const.js";

const Logo = (props) => {
  const {onLogoClick, logoType} = props;
  const logoContainerClass = logoType === `header` ? `header__left` : ``;

  return (
    <div className={logoContainerClass} onClick={onLogoClick}>
      <Link to={AppRoute.ROOT} className={`${logoType}__logo-link`}>
        <img className={`${logoType}__logo`} src="/img/logo.svg" alt="6 cities logo" width={LOGO_SIZE[logoType].width} height={LOGO_SIZE[logoType].height} />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  onLogoClick: PropTypes.func.isRequired,
  logoType: PropTypes.string.isRequired,
};

export default Logo;
