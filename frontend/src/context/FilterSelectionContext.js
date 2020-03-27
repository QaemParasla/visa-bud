import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = props => {
  const [filter, setFilter] = useState({});

  return (
    <>
      {console.log("Rendering FilterSelectContext")}
      <FilterContext.Provider value={[filter, setFilter]}>
        {props.children}
      </FilterContext.Provider>
    </>
  );
};
