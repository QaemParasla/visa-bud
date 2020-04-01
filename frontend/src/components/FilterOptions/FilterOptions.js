import React, { useEffect, useContext } from "react";
import { UncontrolledCollapse } from "reactstrap";
import { FilterContext } from "../../context/FilterSelectionContext";
import "./FilterOptions.css";

function Filter() {
  const [filter, setFilter] = useContext(FilterContext);

  function ApplyFilter(filterSelected) {
    switch (filterSelected) {
      case "VISA_FREE": {
        if (filter.VISA_FREE === "active") {
          setFilter({ type: "VISA_FREE", payload: "inActive" });
        } else {
          setFilter({ type: "VISA_FREE", payload: "active" });
        }
        break;
      }
      case "VISA_ON_ARRIVAL_AND_EVISA": {
        if (filter.VISA_ON_ARRIVAL_AND_EVISA === "active") {
          setFilter({ type: "VISA_ON_ARRIVAL_AND_EVISA", payload: "inActive" });
        } else {
          setFilter({ type: "VISA_ON_ARRIVAL_AND_EVISA", payload: "active" });
        }
        break;
      }
      case "EVISA": {
        if (filter.EVISA === "active") {
          setFilter({ type: "EVISA", payload: "inActive" });
        } else {
          setFilter({ type: "EVISA", payload: "active" });
        }
        break;
      }
      case "ETA": {
        if (filter.ETA === "active") {
          setFilter({ type: "ETA", payload: "inActive" });
        } else {
          setFilter({ type: "ETA", payload: "active" });
        }
        break;
      }
    }
  }

  return (
    <>
      {console.log("Rendering Filter Options")}
      {console.log("Visa Free" + filter.VISA_FREE)}
      {console.log(
        "VISA_ON_ARRIVAL_AND_EVISA" + filter.VISA_ON_ARRIVAL_AND_EVISA
      )}
      {console.log("EVISA" + filter.EVISA)}
      {console.log("ETA" + filter.ETA)}

      {/* <button type="button" className="btn btn-secondary ml-4" id="toggler">
        Add Filters
      </button> */}

      {/* {search && (
        <> */}
      <button type="button" className="btn btn-secondary ml-4" id="toggler">
        Add Filters
      </button>
      <UncontrolledCollapse toggler="#toggler">
        <div className="container-fluid filter-panel">
          <div className="filter-options">
            <div className="filter-options-label"> Visa Preferences </div>
            <button
              type="button"
              className={`btn btn-outline-dark ml-2 mt-2 ${filter.VISA_FREE}`}
              onClick={() => ApplyFilter("VISA_FREE")}
            >
              🛂 Visa Free
            </button>
            <button
              type="button"
              class={`btn btn-outline-dark ml-2 mt-2  ${filter.VISA_ON_ARRIVAL_AND_EVISA}`}
              onClick={() => ApplyFilter("VISA_ON_ARRIVAL_AND_EVISA")}
            >
              🛂 Visa on Arrival and eVisa
            </button>
            <button
              type="button"
              class={`btn btn-outline-dark ml-2 mt-2  ${filter.EVISA}`}
              onClick={() => ApplyFilter("EVISA")}
            >
              🛂 eVisa
            </button>
            <button
              type="button"
              class={`btn btn-outline-dark ml-2 mt-2  ${filter.ETA}`}
              onClick={() => ApplyFilter("ETA")}
            >
              🛂 eTA
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
      {/* </>
      )} */}
    </>
  );
}
export default Filter;
