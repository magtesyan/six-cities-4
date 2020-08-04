import * as renderer from "react-test-renderer";
import * as React from "react";
import PlaceDetailsFeatures from "./place-details-features";

const features: string[] = [
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
    .create(<PlaceDetailsFeatures
      features={features}
    />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
