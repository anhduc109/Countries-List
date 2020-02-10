import React, { useState } from "react";

import "./App.css";
import useFetch from "./custom-hooks/useFetch";
import SearchBar from "./components/SearchBar";
import CountriesTable from "./components/CountriesTable";

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredField, setFilteredField] = useState("name");
  const [isAsc, setIsAsc] = useState(true);

  const [countries, error] = useFetch(searchKeyword, filteredField, isAsc);

  const handleSearchInput = evt => {
    setSearchKeyword(evt.target.value);
  };

  const handleIsAsc = field => {
    setFilteredField(field);
    setIsAsc(!isAsc);
  };

  return !error ? (
    <div className="app-wrapper">
      <h1 className="header">Countries List</h1>
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
