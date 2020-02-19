import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import lodash from "lodash";

import { Country, AppState } from "../types";
import { fetchData } from "../redux/actions";

const useCountries = (
  keyword: string,
  filteredField: string,
  isAsc: boolean
) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  const countriesAPI = useSelector(
    (state: AppState) => state.countries.countriesAPI
  );

  const dispatch = useDispatch();

  useEffect(() => {
    //Prevent from re-fetching
    if (countriesAPI.length <= 0) {
      dispatch(fetchData());
    }
  }, [dispatch, countriesAPI]);

  useEffect(() => {
    setCountries(countriesAPI);
    let newCountriesList = countries.filter(
      item =>
        item.name.toLowerCase().includes(keyword.toLowerCase()) ||
        item.nativeName.toLowerCase().includes(keyword.toLowerCase()) ||
        item.population <= +keyword ||
        item.region.toLowerCase().includes(keyword.toLowerCase())
    );

    newCountriesList = lodash.orderBy(
      newCountriesList,
      filteredField,
      isAsc ? "asc" : "desc"
    );

    setFilteredCountries(newCountriesList);
  }, [countries, keyword, filteredField, isAsc, countriesAPI]);

  return [filteredCountries];
};

export default useCountries;
