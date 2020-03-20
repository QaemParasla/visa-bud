import React, { useState, useContext } from "react";
import { UncontrolledCollapse } from "reactstrap";
import { FilterContext } from "../../context/FilterSelectionContext";
import "./FilterOptions.css";

// let isVisaFreeBtnSelected = "active";
// let isVisaOnArrivalBtnSelected = "inactive";

// const FilterOptions = {
//   VISA_FREE: "Visa Free",
//   VISA_ON_ARRIVAL: "Visa on Arrival"
// };

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

function Filter() {
  console.log("AM I CALLED 2>>");
  const [filter, setFilter] = useContext(FilterContext);
  const [filterToggle, setFlterToggle] = useState(false);

  function ApplyFilter(filter) {
    console.log("AM I CALLED 3>>");
    /// console.log("filter: " + JSON.stringify(FilterOptions));
    switch (filter) {
      case FilterOptions.visa_free.name: {
        if (FilterOptions.visa_free.isActive === "active") {
          // console.log("check visa fre to inactive");
          FilterOptions.visa_free.isActive = "inactive";
          //  console.log("filter2: " + JSON.stringify(FilterOptions));
          setFilter({ filterType: "visa free", status: "inactive" });
        } else {
          // console.log("check visa free to active");
          FilterOptions.visa_free.isActive = "active";
          setFilter({ filterType: "visa free", status: "active" });
        }
        setFlterToggle(!filterToggle);
        break;
      }
      case FilterOptions.visa_on_arrival.name: {
        if (FilterOptions.visa_on_arrival.isActive === "active") {
          // console.log("check visa on arrival to inactive");
          FilterOptions.visa_on_arrival.isActive = "inactive";
          setFilter({ filterType: "visa on arrival", status: "inactive" });
        } else {
          // console.log("check visa on arrival to active");
          FilterOptions.visa_on_arrival.isActive = "active";
          setFilter({ filterType: "visa on arrival", status: "active" });
        }
        setFlterToggle(!filterToggle);
        break;
      }
    }
  }
  return (
    <div className="ml-4 mt-5">
      {console.log("AM I CALLED 4>>")}
      <button type="button" className="btn btn-secondary" id="toggler">
        Add Filter:
      </button>
      <UncontrolledCollapse toggler="#toggler">
        <div className="FilterPanel">
          <div className="ml-2 mt-2 pt-2">Visa Preferences</div>
          <button
            type="button"
            className={`btn btn-outline-dark ml-2 mt-2 ${FilterOptions.visa_free.isActive}`}
            onClick={() => ApplyFilter(FilterOptions.visa_free.name)}
          >
            Visa Free
          </button>
          <button
            type="button"
            class={`btn btn-outline-dark ml-2 mt-2  ${FilterOptions.visa_on_arrival.isActive}`}
            onClick={() => ApplyFilter(FilterOptions.visa_on_arrival.name)}
          >
            Visa on Arrival
          </button>
          <div className="ml-2 mt-2 pt-2">Travel Preferences</div>
          <button type="button" className={`btn btn-outline-dark ml-2 mt-2`}>
            English Speaking
          </button>
          <button type="button" class={`btn btn-outline-dark ml-2 mt-2  `}>
            Party Hub
          </button>
        </div>
      </UncontrolledCollapse>
    </div>
  );
}
export default Filter;
