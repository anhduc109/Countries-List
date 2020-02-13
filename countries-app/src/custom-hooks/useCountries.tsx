import { useState, useEffect } from "react";
import lodash from "lodash";

import { Country } from "../types";

const useCountries = (
  keyword: string,
  filteredField: string,
  isAsc: boolean
) => {
  const baseUrl = "https://restcountries.eu/rest/v2/all";
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [error, setError] = useState(null);

  const fetchCountries = async () => {
    try {
      let res = await fetch(baseUrl);
      let data = await res.json();
      setCountries(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
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
  }, [countries, keyword, filteredField, isAsc]);

  return [filteredCountries, error];
};

export default useCountries;
