import leaflet from "leaflet";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    const {city} = this.props;

    this.cityCoords = city;
    this.zoom = 12;
    this.map = null;
    this.activeOffer = {};
    this.markersGroup = null;
  }

  componentDidMount() {
    const {activeOffer} = this.props;
    this._initialize();
    this._setView();
    this._setIcons();
    this.activeOffer = activeOffer;
  }

  componentDidUpdate() {
    this._setIcons();
  }

  _clearMarkers() {
    if (this.markersGroup) {
      this.markersGroup.clearLayers();
    }
  }

  _initialize() {
    this.map = leaflet.map(`map`, {
      center: this.cityCoords,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });


    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);
  }

  _setView() {
    this.map.setView(this.cityCoords, this.zoom);
  }

  _setIcons() {
    const {offers, activeOffer} = this.props;
    if (this.activeOffer !== activeOffer) {
      this._clearMarkers(this.markers);
    }
    let markers = [];
    if (offers.length) {
      this._clearMarkers(this.markers);
      offers.forEach((offer) => {
        const offerCords = offer.coordinates;
        const icon = leaflet.icon({
          iconUrl: (offer === activeOffer) ? `/img/pin-active.svg` : `/img/pin.svg`,
          iconSize: [30, 30]
        });

        if (offerCords.length) {
          const marker = leaflet.marker(offerCords, {icon});
          markers.push(marker);
        }
      });
      this.markersGroup = leaflet.featureGroup(markers);
      this.markersGroup.addTo(this.map);
    }
  }

  render() {
    return (
      <div id="map" style={{width: `100%`, height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  city: PropTypes.arrayOf(PropTypes.number),
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeOffer: PropTypes.object
};

export default Map;
