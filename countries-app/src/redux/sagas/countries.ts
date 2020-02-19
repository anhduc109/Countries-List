import { takeLatest, select } from "redux-saga/effects";

import {
  FETCH_DATA_SUCCEED,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  AddCountryAction,
  RemoveCountryAction,
  FetchDataSucceedAction,
  AppState
} from "../../types";

function* savingCountriesAPI(action: FetchDataSucceedAction) {
  const state: AppState = yield select();
  yield localStorage.setItem(
    "countriesAPI",
    JSON.stringify(state.countries.countriesAPI)
  );
}

function* savingFavorites(action: AddCountryAction | RemoveCountryAction) {
  const state: AppState = yield select();
  yield localStorage.setItem(
    "favoriteCountries",
    JSON.stringify(state.countries.favorites)
  );
}

export default [
  takeLatest([ADD_COUNTRY, REMOVE_COUNTRY], savingFavorites),
  takeLatest(FETCH_DATA_SUCCEED, savingCountriesAPI)
];
