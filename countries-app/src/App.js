import React, { useState, useEffect } from "react";
import lodash from "lodash";

import "./App.css";
import useFetch from "./custom-hooks/useFetch";
import SearchBar from "./components/SearchBar";
import CountriesTable from "./components/CountriesTable";

const App = () => {
  const [countries, error] = useFetch();
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isAscName, setIsAscName] = useState(true);
  const [isAscPopulation, setIsAscPopulation] = useState(true);
  const [isAscRegion, setIsAscRegion] = useState(true);

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

  const handleNameIsAsc = isAsc => {
    let realIsAsc = !isAsc;
    setIsAscName(!isAscName);
    setIsAscPopulation(true);
    setIsAscRegion(true);
    setFilteredCountries(
      lodash.orderBy(filteredCountries, "name", realIsAsc ? "asc" : "desc")
    );
  };

  const handleIsAscPopulation = isAsc => {
    let realIsAsc = !isAsc;
    setIsAscPopulation(!isAscPopulation);
    setIsAscName(true);
    setIsAscRegion(true);
    setFilteredCountries(
      lodash.orderBy(
        filteredCountries,
        "population",
        realIsAsc ? "asc" : "desc"
      )
    );
  };

  const handleIsAscRegion = isAsc => {
    let realIsAsc = !isAsc;
    setIsAscRegion(!isAscRegion);
    setIsAscName(true);
    setIsAscPopulation(true);
    setFilteredCountries(
      lodash.orderBy(filteredCountries, "region", realIsAsc ? "asc" : "desc")
    );
  };

  return !error ? (
    <div className="app-wrapper">
      <h1 className="header">Countries List</h1>
      <SearchBar handleSearchInput={handleSearchInput} />
      <CountriesTable
        data={filteredCountries}
        isAscName={isAscName}
        handleNameIsAsc={handleNameIsAsc}
        isAscPopulation={isAscPopulation}
        handleIsAscPopulation={handleIsAscPopulation}
        isAscRegion={isAscRegion}
        handleIsAscRegion={handleIsAscRegion}
      />
    </div>
  ) : (
    <div className="app-wrapper">
      <h1>Something wrong!</h1>
    </div>
  );
};

export default App;
