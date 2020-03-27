import React, { useState, useContext } from "react";
import { UncontrolledCollapse } from "reactstrap";
import { FilterContext } from "../../context/FilterSelectionContext";
import "./FilterOptions.css";

let FilterOptions = {
  changed: false,
  visa_free: {
    name: "visa free",
    isActive: "active"
  },
  visa_on_arrival: {
    name: "visa on arrival",
    isActive: "inactive"
  }
};

let TravelPreference = [];

function Filter() {
  const [filter, setFilter] = useContext(FilterContext);
  const [filterToggle, setFlterToggle] = useState(false);

  function ApplyFilter(filter) {
    switch (filter) {
      case FilterOptions.visa_free.name: {
        if (FilterOptions.visa_free.isActive === "active") {
          FilterOptions.visa_free.isActive = "inactive";
          setFilter({ filterType: "visa free", status: "inactive" });
        } else {
          FilterOptions.visa_free.isActive = "active";
          setFilter({ filterType: "visa free", status: "active" });
        }
        setFlterToggle(!filterToggle);
        break;
      }
      case FilterOptions.visa_on_arrival.name: {
        if (FilterOptions.visa_on_arrival.isActive === "active") {
          FilterOptions.visa_on_arrival.isActive = "inactive";
          setFilter({ filterType: "visa on arrival", status: "inactive" });
        } else {
          FilterOptions.visa_on_arrival.isActive = "active";
          setFilter({ filterType: "visa on arrival", status: "active" });
        }
        setFlterToggle(!filterToggle);
        break;
      }
    }
  }
  return (
    <>
      {console.log("Rendering Filter Options")}
      <button type="button" className="btn btn-secondary ml-4" id="toggler">
        Add Filters
      </button>

      <UncontrolledCollapse toggler="#toggler">
        <div className="container-fluid filter-panel">
          <div className="filter-options">
            <div className="filter-options-label"> Visa Preferences </div>

            <button
              type="button"
              className={`btn btn-outline-dark ml-2 mt-2 ${FilterOptions.visa_free.isActive}`}
              onClick={() => ApplyFilter(FilterOptions.visa_free.name)}
            >
              🛂 Visa Free
            </button>
            <button
              type="button"
              class={`btn btn-outline-dark ml-2 mt-2  ${FilterOptions.visa_on_arrival.isActive}`}
              onClick={() => ApplyFilter(FilterOptions.visa_on_arrival.name)}
            >
              🛂 Visa on Arrival
            </button>
            <div className="ml-2 mt-2 pt-2">Travel Preferences</div>
            <button type="button" className={`btn btn-outline-dark ml-2 mt-2`}>
              💬 English Speaking
            </button>
            <button type="button" class={`btn btn-outline-dark ml-2 mt-2  `}>
              👮 ‍Safe
            </button>
          </div>
        </div>
      </UncontrolledCollapse>
    </>
  );
}
export default Filter;
