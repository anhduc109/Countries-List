import React, { useState, useCallback } from "react";
import Typography from "@material-ui/core/Typography";

import "./App.css";
import useCountries from "./custom-hooks/useCountries";
import SearchBar from "./components/SearchBar";
import CountriesTable from "./components/CountriesTable";

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredField, setFilteredField] = useState("name");
  const [isAsc, setIsAsc] = useState(true);

  const [countries, error] = useCountries(searchKeyword, filteredField, isAsc);

  // Adding useCallback function to prevent SearchBar from re-rendering when it's unecessary
  const handleSearchInput = useCallback(evt => {
    setSearchKeyword(evt.target.value);
  }, []);

  const handleIsAsc = field => {
    setFilteredField(field);
    setIsAsc(!isAsc);
  };

  return !error ? (
    <div className="app-wrapper">
      <Typography className="header" variant="h4">
        Countries List
      </Typography>
      <SearchBar handleSearchInput={handleSearchInput} />
      <CountriesTable
        data={countries}
        isAsc={isAsc}
        handleIsAsc={handleIsAsc}
        filteredField={filteredField}
      />
    </div>
  ) : (
    <div className="app-wrapper">
      <h1>Something wrong!</h1>
    </div>
  );
};

export default App;
