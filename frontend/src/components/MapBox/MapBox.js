import React, { useEffect, useRef, useState } from "react";
import { UncontrolledCollapse } from "reactstrap";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./MapBox.css";

const MapBox = props => {
  console.log("RENDING MAP TOP SIDE");
  const [mapInstance, setMapInstance] = useState(null);
  const mapboxContainer = useRef(null);

  useEffect(() => {
    console.log("UseEffect MapBox");

    mapboxgl.accessToken =
      "pk.eyJ1IjoicWFlbXBhcmFzbGEiLCJhIjoiY2s4NTVkaWNqMDNleDNvcGZiOGpxMGZ1ayJ9.-QSENqDh_QAGgTkoasl2ww";
    const initializeMap = () => {
      console.log("Initializing map ");
      const map = new mapboxgl.Map({
        container: mapboxContainer.current,
        style: "mapbox://styles/qaemparasla/ck85d8xug01va1iw2wa9hdgg6",
        center: [0, 0],
        zoom: 2
      });

      map.on("load", () => {
        map.addControl(new mapboxgl.NavigationControl());
        map.resize();
        setMapInstance(map);
      });
    };

    if (!mapInstance) initializeMap();
  }, [mapInstance]);

  function paintMap() {
    console.log("Mapbox - PaintMap");
    if (mapInstance) {
      let green = props.data.VISA_FREE;
      let blue = props.data.VISA_ON_ARRIVAL_AND_EVISA;
      let gold = props.data.ETA;
      let yellow = props.data.EVISA;

      if (green.length === 0) {
        green = ["green"];
      }
      if (blue.length === 0) {
        blue = ["blue"];
      }
      if (gold.length === 0) {
        gold = ["gold"];
      }
      if (yellow.length === 0) {
        yellow = ["yellow"];
      }

      mapInstance.setPaintProperty(
        "ne-10m-admin-0-countries-2wu9ko",
        "fill-color",
        [
          "match",
          ["get", "SOVEREIGNT"],
          green,
          "#23cf6b",
          blue,
          "#6b62fe",
          gold,
          "#daa520",
          yellow,
          "#ffff00",
          "hsl(0, 3%, 99%)"
        ]
      );
    }
  }

  return (
    <>
      {console.log("Rendering MapBox")}
      {paintMap()}
      <button type="button" className="btn btn-secondary ml-4" id="map-toggler">
        🌏 Map
      </button>

      <UncontrolledCollapse toggler="#map-toggler">
        <div className=" map-panel">
          <button
            type="button"
            className="btn btn-secondary map-close m-2"
            id="map-toggler"
          >
            🌏 Close Map
          </button>
          <div ref={mapboxContainer} className="custome-map"></div>
        </div>
      </UncontrolledCollapse>
    </>
  );
};

export default MapBox;
