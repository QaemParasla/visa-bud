import React, { useState, useContext } from "react";
import { SearchContext } from "../../context/CountrySearchContext";
import "./VisaSearchBox.css";

const axios = require("axios");
let country = [];
let userInput = "";
let isSuggestionBoxActive = "suggestionBoxInActive";

axios
  .get("api/countrylist")
  .then(function(response) {
    country = response.data[0].countryAll;
  })
  .catch(function(error) {
    console.log(error);
  });

const VisaSearchBox = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [search, setSearch] = useContext(SearchContext);

  return (
    <>
      {console.log("Rendering Visa SearchBox")}
      <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto mt-4 text-center form">
        <input
          className="header-search form-control form-control-lg"
          type="text"
          placeholder="Enter Your Amazing Country!"
          onChange={event => {
            getSuggestions(event);
          }}
          onKeyDown={event => {
            checkSubmit(event);
          }}
          value={userInput}
        />

        {suggestions && (
          <div className={`suggestionBox ${isSuggestionBoxActive}`}>
            {suggestions.map(country => (
              <div onClick={() => suggestionSelected(country)}>{country}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );

  function suggestionSelected(country) {
    userInput = country;
    isSuggestionBoxActive = "suggestionBoxInActive";
    setSuggestions([]);
    setSearch(country);
  }

  function checkSubmit(event) {
    if (event.key === "Enter") {
      //console.log("YAAAAAAA ENTER PRESSED");
    } else if (event.key === "ArrowUp") {
      // console.log("YAAAAAAA Up PRESSED");
    } else if (event.key === "ArrowDown") {
      // console.log("YAAAAAAA Down PRESSED");
    }
  }

  function getSuggestions(event) {
    userInput = event.target.value;
    if (userInput === "") {
      isSuggestionBoxActive = "suggestionBoxInActive";
      setSuggestions([]);
    } else {
      isSuggestionBoxActive = "suggestionBoxActive";
      const pattern = `[A-Za-z.\s]*${userInput.toLowerCase()}[A-Za-z.\s]*`;
      const matchRegex = new RegExp(pattern);
      setSuggestions(
        country.filter(item => matchRegex.test(item.toLowerCase()))
      );
    }
  }
};

export default VisaSearchBox;
