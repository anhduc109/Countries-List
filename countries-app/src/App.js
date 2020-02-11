import React, { useState } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";

import "./App.css";
import useCountries from "./custom-hooks/useCountries";
import SearchBar from "./components/SearchBar";
import CountriesTable from "./components/CountriesTable";

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredField, setFilteredField] = useState("name");
  const [isAsc, setIsAsc] = useState(true);

  const [countries, error] = useCountries(searchKeyword, filteredField, isAsc);

  const handleSearchInput = evt => {
    setSearchKeyword(evt.target.value);
  };

  const handleIsAsc = field => {
    setFilteredField(field);
    setIsAsc(!isAsc);
  };

  const theme = createMuiTheme({
    palette: {
      primary: blueGrey
    },
    typography: {
      fontFamily: "Raleway, Arial"
    }
  });

  return !error ? (
    <MuiThemeProvider theme={theme}>
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
    </MuiThemeProvider>
  ) : (
    <div className="app-wrapper">
      <h1>Something wrong!</h1>
    </div>
  );
};

export default App;
