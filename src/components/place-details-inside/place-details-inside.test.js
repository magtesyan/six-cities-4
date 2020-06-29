import PlaceDetailsInside from "./place-details-inside.jsx";
import renderer from "react-test-renderer";
import React from "react";

const features = [
  `Wi-Fi`,
  `Washing machine`,
  `Towels`,
  `Heating`,
  `Coffee machine`,
  `Baby seat`,
  `Kitchen`,
  `Dishwasher`,
];

it(`Features in PlaceDetailsInside are not rendered correctly`, () => {
  const tree = renderer
    .create(<PlaceDetailsInside
      features={features}
    />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
