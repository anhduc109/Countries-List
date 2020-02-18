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
  const baseUrl = "https://restcountries.eu/rest/v2/all";
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [error, setError] = useState(null);

  const countriesAPI = useSelector(
    (state: AppState) => state.countries.countriesAPI
  );

  // const fetchCountries = async () => {
  //   try {
  //     let res = await fetch(baseUrl);
  //     let data = await res.json();
  //     setCountries(data);
  //   } catch (error) {
  //     setError(error);
  //   }
  // };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

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

  return [filteredCountries, error];
};

export default useCountries;
