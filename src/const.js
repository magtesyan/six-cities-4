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

export {
  CITY_COORDINATES,
  RATING_IN_WIDTH_PERCENT,
  OFFER_CARDS_CLASSES,
  MONTHS,
};
