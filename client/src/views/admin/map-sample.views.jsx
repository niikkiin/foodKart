import React, { useState } from "react";
// import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

// components
import PageTitle from "../../components/common/PageTitle";

// map
import "leaflet/dist/leaflet.css";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const iconRider = new L.Icon({
  iconUrl: require("../../assets/map/rider.svg"),
  iconRetinaUrl: require("../../assets/map/rider.svg"),
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(40, 55)
  // className: 'leaflet-div-icon'
});

const iconHome = new L.Icon({
  iconUrl: require("../../assets/map/home.svg"),
  iconRetinaUrl: require("../../assets/map/home.svg"),
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(40, 55)
  // className: 'leaflet-div-icon'
});

const MapSampleView = () => {
  const [homeLocation] = useState({
    homeLat: 14.293270,
    homeLng: 122.665329
  });
  const [riderLocation] = useState({
    riderLat: 14.291410,
    riderLng: 122.692513
  });

  const { homeLat, homeLng } = homeLocation;
  const { riderLat, riderLng } = riderLocation;
  const riderPosition = [riderLat, riderLng];
  const homePosition = [homeLat, homeLng];

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          title="Map"
          subtitle="overview"
          className="text-sm-left mb-3"
        />
      </Row>
      <Row>
        <Col>
          <Map center={homePosition} zoom={14}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={riderPosition} icon={iconRider}>
              <Popup>Jose Panganiban, Camarines Norte</Popup>
            </Marker>

            <Marker position={homePosition} icon={iconHome}>
              <Popup>Pag-asa, Jose Panganiban, Camarines Norte</Popup>
            </Marker>
          </Map>
        </Col>
      </Row>
    </Container>
  );
};

MapSampleView.propTypes = {};

MapSampleView.defaultProps = {};

export default MapSampleView;
