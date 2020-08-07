const RATING_IN_WIDTH_PERCENT = 20;

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const CITY_COORDINATES = new Map([
  [`Amsterdam`, [52.38333, 4.9]],
  [`Brussels`, [50.85045, 4.35]],
  [`Paris`, [48.8534100, 2.3488000]],
  [`Cologne`, [50.93333, 6.95]],
  [`Hamburg`, [53.57532, 10.015]],
  [`Dusseldorf`, [51.22172, 6.77616]],
]);

const OFFER_CARDS_CLASSES = new Map([
  [`main-page`, `cities__place-card`],
  [`details-page`, `near-places__card`],
  [`favorites-page`, `favorites__card`],
]);

const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`, `Jule`, `August`, `September`, `October`, `November`, `December`];

const LOGO_TYPE = {
  HEADER: `header`,
  FOOTER: `footer`
};

const LOGO_SIZE = {
  header: {
    width: 81,
    height: 41
  },
  footer: {
    width: 64,
    height: 33
  }
};

const PLACE_CARD_IMG_SIZE = {
  cities: {
    width: 260,
    height: 200
  },
  favorites: {
    width: 150,
    height: 110
  }
};

const AppRoute = {
  LOGIN: `/login`,
  DETAILS: `/offer`,
  ROOT: `/`,
  FAVORITES: `/favorites`,
};

export {
  AppRoute,
  AuthorizationStatus,
  CITY_COORDINATES,
  LOGO_TYPE,
  LOGO_SIZE,
  MONTHS,
  OFFER_CARDS_CLASSES,
  PLACE_CARD_IMG_SIZE,
  RATING_IN_WIDTH_PERCENT,
};
