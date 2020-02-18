import { Dispatch } from "redux";

import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCEED,
  CHANGE_KEYWORD,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  ADD_COUNTRIES_FROM_LOCAL_STORAGE,
  CountryActions,
  Country
} from "../../types";

export function fetchData() {
  return (dispatch: Dispatch) => {
    dispatch(fetchDataStart(true));
    return fetch("https://restcountries.eu/rest/v2/all")
      .then(resp => resp.json())
      .then(data => dispatch(fetchDataSucceed(data)));
  };
}

export function fetchDataStart(isFetching: boolean): CountryActions {
  return {
    type: FETCH_DATA_START,
    payload: {
      isFetching
    }
  };
}

export function fetchDataSucceed(countriesAPI: Country[]): CountryActions {
  return {
    type: FETCH_DATA_SUCCEED,
    payload: {
      countriesAPI,
      isFetching: false
    }
  };
}

export function changeKeyword(keyword: string): CountryActions {
  return {
    type: CHANGE_KEYWORD,
    payload: {
      keyword: keyword
    }
  };
}

export function addCountry(country: Country): CountryActions {
  return {
    type: ADD_COUNTRY,
    payload: {
      country
    }
  };
}

export function removeCountry(country: Country): CountryActions {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      country
    }
  };
}

export function addCountriesFromLocalStorage(
  countries: Country[]
): CountryActions {
  return {
    type: ADD_COUNTRIES_FROM_LOCAL_STORAGE,
    payload: {
      countries
    }
  };
}
