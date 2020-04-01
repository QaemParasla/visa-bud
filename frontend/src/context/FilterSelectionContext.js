import React, { createContext, useState } from "react";

export const FilterContext = createContext();

const initialState = {
  VISA_FREE: "active",
  VISA_ON_ARRIVAL_AND_EVISA: "inActive",
  EVISA: "inActive",
  ETA: "inAtive"
};

function reducer(state, action) {
  switch (action.type) {
    case "VISA_FREE": {
      return {
        VISA_FREE: action.payload,
        VISA_ON_ARRIVAL_AND_EVISA: "inActive",
        EVISA: "inActive",
        ETA: "inAtive"
      };
    }
    case "VISA_ON_ARRIVAL_AND_EVISA": {
      return {
        VISA_FREE: "inActive",
        VISA_ON_ARRIVAL_AND_EVISA: action.payload,
        EVISA: "inActive",
        ETA: "inAtive"
      };
    }
    case "EVISA": {
      return {
        VISA_FREE: "inActive",
        VISA_ON_ARRIVAL_AND_EVISA: "inActive",
        EVISA: action.payload,
        ETA: "inAtive"
      };
    }
    case "ETA": {
      return {
        VISA_FREE: "inActive",
        VISA_ON_ARRIVAL_AND_EVISA: "inActive",
        EVISA: "inActive",
        ETA: action.payload
      };
    }
  }
}

export const FilterProvider = props => {
  //const [filter, setFilter] = useState({});
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
      {console.log("Rendering FilterSelectContext")}
      <FilterContext.Provider value={[state, dispatch]}>
        {props.children}
      </FilterContext.Provider>
    </>
  );
};
