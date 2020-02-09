import { useState, useEffect } from "react";

const useFetch = () => {
  const baseUrl = "https://restcountries.eu/rest/v2/all";
  const [countries, setCountries] = useState([]);
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

  return [countries, error];
};

export default useFetch;
