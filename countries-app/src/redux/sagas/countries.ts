import { takeLatest, select } from "redux-saga/effects";

import { ADD_COUNTRY, REMOVE_COUNTRY } from "../../types";

function* savingState(action: any) {
  const state = yield select();
  yield localStorage.setItem(
    "favoriteCountries",
    JSON.stringify(state.countries.favorites)
  );
}

export default [takeLatest([ADD_COUNTRY, REMOVE_COUNTRY], savingState)];
