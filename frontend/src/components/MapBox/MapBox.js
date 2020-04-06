import React, { useEffect, useRef, useState } from "react";
import { Collapse } from "reactstrap";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./MapBox.css";

let mapboxshowhide = "mapbox-hide";

const MapBox = props => {
  console.log("Mapbox - top ");
  const [map, setMap] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const mapBoxContainer = useRef(null);

  useEffect(() => {
    console.log("Called in napboxglMAP useefffect");
    mapboxgl.accessToken =
      "pk.eyJ1IjoicWFlbXBhcmFzbGEiLCJhIjoiY2s4NTVkaWNqMDNleDNvcGZiOGpxMGZ1ayJ9.-QSENqDh_QAGgTkoasl2ww";
    const initializeMap = () => {
      console.log("Mapbox - Initializing  ");
      const map = new mapboxgl.Map({
        container: mapBoxContainer.current,
        style: "mapbox://styles/qaemparasla/ck85d8xug01va1iw2wa9hdgg6", // stylesheet location
        center: [0, 0],
        zoom: 2
      });

      map.on("load", () => {
        console.log("Mapbox - on Load");
        map.addControl(new mapboxgl.NavigationControl());
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap();
  }, [map]);

  function paintMapBox() {
    console.log("Mapbox - PaintMap");
    if (map) {
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

      map.setPaintProperty("ne-10m-admin-0-countries-2wu9ko", "fill-color", [
        "match",
        ["get", "SOVEREIGNT"],
        green,
        "#9acd32",
        blue,
        "#72c7fa",
        gold,
        "#e6b31e",
        yellow,
        "#ffff00",
        "hsl(0, 3%, 99%)"
      ]);
    }
  }

  function toggleMapBox(st) {
    console.log("Mapbox - toggleMapBox");
    mapboxshowhide = st;
    setIsOpen(!isOpen);
  }

  return (
    <div>
      {console.log("Mapbox  - Rendeering ")}
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => toggleMapBox("mapbox-show")}
      >
        🌎 Open Map
      </button>
      <div
        ref={mapBoxContainer}
        className={`mapbox-fullscreen ${mapboxshowhide}`}
      >
        <button
          type="button"
          className="btn btn-secondary mapbox-close-button m-2"
          onClick={() => toggleMapBox("mapbox-hide")}
        >
          🌎 Close Map
        </button>
        <div className="col mapbox-legend-panel">
          <div className="row">
            <div className="mapbox_legend_color green"></div>
            <div className="mapbox-legend-name">Visa Free</div>
          </div>
          <div className="row">
            <div className="mapbox_legend_color blue"></div>
            <div className="mapbox-legend-name">Visa on Arrival / eVisa</div>
          </div>
          <div className="row">
            <div className="mapbox_legend_color gold"></div>
            <div className="mapbox-legend-name">eTA</div>
          </div>
          <div className="row">
            <div className="mapbox_legend_color yellow"></div>
            <div className="mapbox-legend-name">eVisa</div>
          </div>
        </div>
      </div>
      {paintMapBox()}
    </div>
  );
};

export default MapBox;
