const RATING_IN_WIDTH_PERCENT = 20;

const CITY_COORDINATES = new Map([
  [`Amsterdam`, [52.38333, 4.9]],
  [`Brussels`, [50.85045, 4.35]],
  [`Paris`, [48.5112, 2.21]],
  [`Cologne`, [33.08901, -96.88]],
  [`Hamburg`, [53.57532, 10.015]],
  [`Dusseldorf`, [51.22172, 6.77616]],
]);

const OFFER_CARDS_CLASSES = new Map([
  [`main-page`, `cities__place-card`],
  [`details-page`, `near-places__card`],
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

const AppRoute = {
  LOGIN: `/login`,
  DETAILS: `/details`,
  ROOT: `/`,
  FAVORITES: `/favorites`,
};

export {
  AppRoute,
  CITY_COORDINATES,
  LOGO_TYPE,
  LOGO_SIZE,
  MONTHS,
  OFFER_CARDS_CLASSES,
  RATING_IN_WIDTH_PERCENT,
};
