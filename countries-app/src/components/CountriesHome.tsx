import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CountriesTable from "./CountriesTable";
import useCountries from "../custom-hooks/useCountries";
import { HandleIsAsc, Country, AppState } from "../types";
import { addCountriesFromLocalStorage } from "../redux/actions";

const CountriesHome = () => {
  const [filteredField, setFilteredField] = useState("name");
  const [isAsc, setIsAsc] = useState(true);

  const searchKeyword = useSelector(
    (state: AppState) => state.countries.keyword
  );
  const [countries, error] = useCountries(searchKeyword, filteredField, isAsc);

  const dispatch = useDispatch();
  useEffect(() => {
    const favoriteCountries: Country[] = JSON.parse(
      localStorage.getItem("favoriteCountries") || "{}"
    );

    favoriteCountries.length > 0 &&
      dispatch(addCountriesFromLocalStorage(favoriteCountries));
  }, []);

  const handleIsAsc: HandleIsAsc = field => {
    setFilteredField(field);
    setIsAsc(!isAsc);
  };

  return !error ? (
    <>
      <CountriesTable
        data={countries}
        isAsc={isAsc}
        handleIsAsc={handleIsAsc}
        filteredField={filteredField}
      />
    </>
  ) : (
    <h1>Something wrong!</h1>
  );
};

export default CountriesHome;
