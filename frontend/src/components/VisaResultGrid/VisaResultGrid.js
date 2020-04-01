import React, { useState, useEffect, useContext } from "react";
import LazyLoad from "react-lazyload";
import { imageUrl } from "../../firebase/fetchImage";
import { SearchContext } from "../../context/CountrySearchContext";
import { FilterContext } from "../../context/FilterSelectionContext";
import { FilterOptions } from "../FilterOptions";
import { MapBox } from "../MapBox";

import "./VisaResultGrid.css";

const axios = require("axios");

let FilterOption = {
  visa_free: {
    name: "visa free",
    isActive: "active"
  },
  visa_on_arrival: {
    name: "visa on arrival",
    isActive: "inactive"
  }
};

let orginCountryCopy = [];

function VisaResultGrid() {
  const [search] = useContext(SearchContext);
  const [filter, setFilter] = useContext(FilterContext);
  const [orginCountry, setOrginCountry] = useState([]);
  const [mapboxData, setMapBoxData] = useState([]);
  //const [visaOnArrival, setVisaOnArrival] = useState([]);

  useEffect(() => {
    console.log("UseEffect VisaResultGrid (Search)");

    const fetchData = async () => {
      const result = await axios(`api/countryVisaStatusList/${search}`);

      orginCountryCopy = result.data[0].ToCountry;

      ApplyFilter();
      SetMapData();
    };

    if (search !== "") {
      fetchData();
    }
  }, [search]);

  useEffect(() => {
    ApplyFilter();
  }, [filter]);

  function SetMapData() {
    let mapboxData = {
      VISA_FREE: [],
      VISA_ON_ARRIVAL_AND_EVISA: [],
      EVISA: [],
      ETA: []
    };

    orginCountryCopy.map(data => {
      if (data.StatusColor === "Green") {
        mapboxData.VISA_FREE.push(data.Country);
      } else if (data.StatusColor === "Blue") {
        mapboxData.VISA_ON_ARRIVAL_AND_EVISA.push(data.Country);
      } else if (data.StatusColor === "Yellow") {
        mapboxData.EVISA.push(data.Country);
      } else if (data.StatusColor === "Gold") {
        mapboxData.ETA.push(data.Country);
      }
    });

    setMapBoxData(mapboxData);
  }

  function ApplyFilter() {
    if (filter.VISA_FREE === "active") {
      let data = orginCountryCopy.filter(function(e) {
        return e.StatusColor === "Green";
      });
      setOrginCountry(data);
    } else if (filter.VISA_ON_ARRIVAL_AND_EVISA === "active") {
      let data = orginCountryCopy.filter(function(e) {
        return e.StatusColor === "Blue";
      });
      setOrginCountry(data);
    } else if (filter.EVISA === "active") {
      let data = orginCountryCopy.filter(function(e) {
        return e.StatusColor === "Yellow";
      });
      setOrginCountry(data);
    } else if (filter.ETA === "active") {
      let data = orginCountryCopy.filter(function(e) {
        return e.StatusColor === "Gold";
      });
      setOrginCountry(data);
    } else {
      setOrginCountry(orginCountryCopy);
    }
  }

  return (
    <>
      {/* Fillter and Map Controls */}
      {console.log("Rendering VisaResultGrip")}

      {/* Calling Filter Component  */}
      {console.log("SEARCH: " + search)}
      {search && (
        <>
          <div className="filter-action-panel mt-5 ml-3">
            {<FilterOptions></FilterOptions>}
            {<MapBox data={mapboxData}></MapBox>}
          </div>
          <div className="active-filter-panel ml-3 mt-3">
            <div className="result-count ml-4">
              🌇 {orginCountry.length} Amazing Countries
            </div>
          </div>
        </>
      )}
      {/* Calling Filter Component  */}
      {/* Result Grid Component  */}
      <div className="d-flex justify-content-between row m-4">
        {orginCountry.map(toCountry => (
          <div className="col-xm-6  col-sm-6 col-md-4 col-lg-3 countryInfoBox">
            <LazyLoad offset={5}>
              <img
                className="countryImage img-responsive"
                src={imageUrl[toCountry.Country].url}
                alt={toCountry.Country}
              />

              <div className="countryName">{toCountry.Country}</div>
              <div className="visaStatus">{toCountry.Status}</div>
            </LazyLoad>
          </div>
        ))}
      </div>
      {/* Result Grid Component  */}
    </>
  );
}

export default VisaResultGrid;
