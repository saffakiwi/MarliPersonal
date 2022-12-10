import React from "react";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Room } from "@material-ui/icons";
import "../App.css";
import Paper from "@material-ui/core/paper";
import Typography from "@material-ui/core/typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) => ({
  price: {
    backgroundColor: "red",
    color: "white",
    padding: "3px",
    display: "flex",
    marginBottom: "-11px",
  },
  amenity: {
    backgroundColor: "blue",
    color: "white",
    padding: "3px",
    display: "flex",
    marginBottom: "-11px",
  },
  pic: {
    height: "100px",
    width: "100px",
  },
}));

function Map() {
  const classes = useStyles();

  const [viewport, setViewport] = useState({
    borderRadius: "20px",
    marginTop: 300,
    attributionEnabled: false,
    latitude: -37.6917119,
    longitude: 176.1424209,
    zoom: 15,
    zIndex: -1,
  });

  const markerList = [
    {
      lat: -37.6917119,
      long: 176.1424209,
      name: "This is where i live in",
      info: 10,
    },
  ];

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoia2l3aXNhZmZhIiwiYSI6ImNrd3Z0OW5yeTBleXgyc2xheHNkY21sbGkifQ.OVCpkkwscJHa0NSEzoQN8Q"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/kiwisaffa/cl8qli5lh000015nwbk8u3oj8"
        style={{ width: "100%", height: 600 }}
      >
        {markerList.map((marker, index) => (
          <div key={index}>
            <Marker longitude={marker.long} latitude={marker.lat}>
              <LocationOnIcon
                name="Location"
                size="small"
                onMouseEnter={(e) => {
                  e.preventDefault();
                }}
                onMouseLeave={(e) => {
                  e.preventDefault();
                }}
              />
            </Marker>
          </div>
        ))}
      </ReactMapGL>
    </div>
  );
}
export default Map;
