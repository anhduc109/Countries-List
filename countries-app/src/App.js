import React, { useState, useEffect } from "react";

import "./App.css";
import useFetch from "./custom-hooks/useFetch";
import SearchBar from "./components/SearchBar";
import CountriesTable from "./components/CountriesTable";

const App = () => {
  const [countries, error] = useFetch();
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  const handleSearchInput = evt => {
    setFilteredCountries(
      countries.filter(item =>
        item.name.toLowerCase().includes(evt.target.value.toLowerCase())
      )
    );
  };

  return !error ? (
    <div className="app-wrapper">
      <h1 className="header">Countries List</h1>
      <SearchBar handleSearchInput={handleSearchInput} />
      <CountriesTable data={filteredCountries} />
    </div>
  ) : (
    <div className="app-wrapper">
      <h1>Something wrong!</h1>
    </div>
  );
};

export default App;
