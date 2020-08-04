import {Link} from "react-router-dom";
import * as React from "react";
import {AppRoute, LOGO_SIZE} from "../../const";

interface Props {
  onLogoClick: () => void;
  logoType: string;
}

const Logo: React.FunctionComponent<Props> = (props: Props) => {
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

export default Logo;
