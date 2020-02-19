import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import SearchBar from "./components/SearchBar";
import { changeKeyword, addCountriesFromLocalStorage } from "./redux/actions";
import { HandleSearchInput, Country } from "./types";
import ThemeContext, { themes } from "./context-api/context";
import CountriesHome from "./components/CountriesHome";
import CountryDetail from "./components/CountryDetail";

const App = () => {
  const [themeContext, setThemeContext] = useState({
    theme: themes.dark,
    switchTheme: () => {
      setThemeContext(current => ({
        ...current,
        theme: current.theme === themes.dark ? themes.light : themes.dark
      }));
    }
  });

  const theme: any = createMuiTheme(themeContext.theme);

  const dispatch = useDispatch();

  const handleSearchInput: HandleSearchInput = evt => {
    dispatch(changeKeyword(evt.target.value));
  };

  useEffect(() => {
    const favoriteCountries: Country[] = JSON.parse(
      localStorage.getItem("favoriteCountries") || "{}"
    );

    favoriteCountries.length > 0 &&
      dispatch(addCountriesFromLocalStorage(favoriteCountries));
  }, [dispatch]);

  return (
    <div className="app-wrapper">
      <ThemeContext.Provider value={themeContext}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Router>
              <SearchBar handleSearchInput={handleSearchInput} />
              <Switch>
                <Route path="/" exact component={CountriesHome} />
                <Route path="/:name" component={CountryDetail} />
              </Switch>
            </Router>
          </CssBaseline>
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
