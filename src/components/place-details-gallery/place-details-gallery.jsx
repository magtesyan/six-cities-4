import PropTypes from "prop-types";
import React from "react";
import shortid from "shortid";

const PlaceDetailsGallery = (props) => {
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

PlaceDetailsGallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string)
};

export default PlaceDetailsGallery;
