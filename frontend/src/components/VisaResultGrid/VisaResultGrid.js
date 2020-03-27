import React, { useState, useEffect, useContext } from "react";
import LazyLoad from "react-lazyload";
import { imageUrl } from "../../firebase/fetchImage";
import { SearchContext } from "../../context/CountrySearchContext";
import { FilterContext } from "../../context/FilterSelectionContext";
import { FilterOptions } from "../FilterOptions";
import "./VisaResultGrid.css";

const axios = require("axios");
let previousSearch = null;

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

let orginCountryCopy = null;

function VisaResultGrid() {
  const [search] = useContext(SearchContext);
  const [filter, setFilter] = useContext(FilterContext);
  const [orginCountry, setOrginCountry] = useState([]);
  const [visaFree, setVisaFree] = useState([]);
  const [visaOnArrival, setVisaOnArrival] = useState([]);

  useEffect(() => {
    {
      console.log("UseEffect VisaResultGrid (Search)");
    }
    const fetchData = async () => {
      const result = await axios(`api/countryVisaStatusList/${search}`);

      orginCountryCopy = result.data[0].ToCountry;

      ApplyFilter();
    };

    if (search !== "") {
      previousSearch = search;
      fetchData();
    }
  }, [search]);

  useEffect(() => {
    {
      console.log("UseEffect VisaResultGrip (Filter)");
    }
    if (filter.filterType === "visa free") {
      FilterOption.visa_free.isActive = filter.status;
    } else if (filter.filterType === "visa on arrival") {
      FilterOption.visa_on_arrival.isActive = filter.status;
    }

    if (search !== "") {
      ApplyFilter();
    }
  }, [filter]);

  function ApplyFilter() {
    if (
      FilterOption.visa_free.isActive === "active" &&
      FilterOption.visa_on_arrival.isActive === "active"
    ) {
      setOrginCountry(orginCountryCopy);
    } else if (FilterOption.visa_free.isActive === "active") {
      let data = orginCountryCopy.filter(function(e) {
        return e.StatusColor === "Green";
      });
      setOrginCountry(data);
    } else if (FilterOption.visa_on_arrival.isActive === "active") {
      let data = orginCountryCopy.filter(function(e) {
        return e.StatusColor === "Blue";
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
      {/* {<FilterOptions></FilterOptions>} */}
      {/* Calling Filter Component  */}
      {previousSearch && (
        <div className="m-4">
          <FilterOptions></FilterOptions>
          <div className="ml-4 mt-2">
            Showing {orginCountry.length} Amazing Countries Below:
          </div>
        </div>
      )}
      {/* Calling Filter Component  */}
      {/* Result Grid Component  */}
      <div className="d-flex justify-content-between row m-4">
        {orginCountry.map(toCountry => (
          <div className="col-sm-6 col-md-4 col-lg-3 countryInfoBox">
            <LazyLoad offset={5}>
              {console.log(toCountry.Country)}
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
