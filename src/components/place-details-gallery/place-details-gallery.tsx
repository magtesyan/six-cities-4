import * as React from "react";
import shortid from "shortid";

interface Props {
  pictures: string[];
}

const PlaceDetailsGallery: React.FunctionComponent<Props> = (props: Props) => {
  const {pictures} = props;

  const picturesList = pictures ? pictures.map((picture) => {
    return (
      <div className="property__image-wrapper" key={shortid.generate()}>
        <img className="property__image" src={picture} alt="Photo studio" />
      </div>
    );
  }) : ``;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {picturesList}
      </div>
    </div>
  );
};

export default PlaceDetailsGallery;
