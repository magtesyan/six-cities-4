import renderer from "react-test-renderer";
import React from "react";

import PlaceDetailsGallery from "./place-details-gallery.jsx";

const pictures = [
  `img/room.jpg`,
  `img/apartment-01.jpg`,
  `img/apartment-02.jpg`,
  `img/apartment-03.jpg`,
  `img/studio-01.jpg`,
  `img/apartment-01.jpg`
];

it(`Pictures in PlaceDetailsGallery are not rendered correctly`, () => {
  const tree = renderer
    .create(<PlaceDetailsGallery
      pictures={pictures}
    />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
