import React from "react";
import logo from "../../assets/img/visa_landing_image.png";
import "./Home.css";
import { VisaSearchBox } from "../../components/VisaSearchBox";
import { VisaResultGrid } from "../../components/VisaResultGrid";
import { SearchProvider } from "../../context/CountrySearchContext";
import { FilterProvider } from "../../context/FilterSelectionContext";

function Home() {
  function landingPageImage() {
    return (
      <div className="container-fluid">
        <div className="img-fluid">
          <img
            src={logo}
            className="visa-header-image mx-auto d-block img-fluid"
            alt="Responsive image"
          />
        </div>
      </div>
    );
  }

  function landingPageMainText() {
    return (
      <div className="container">
        <div className="header-text mt-4 text-center">
          Where Can I Travel With My Passport?
        </div>
      </div>
    );
  }

  return (
    <>
      {landingPageImage()}
      {landingPageMainText()}
      <SearchProvider>
        <VisaSearchBox />
        <FilterProvider>
          <VisaResultGrid />
        </FilterProvider>
      </SearchProvider>
    </>
  );
}

export default Home;
