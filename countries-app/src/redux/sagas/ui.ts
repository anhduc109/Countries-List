import { takeLatest, select, put } from "redux-saga/effects";

import { REMOVE_COUNTRY, RemoveCountryAction, AppState } from "../../types";
import { toggleDrawer } from "../actions";

function* closingDrawer(action: RemoveCountryAction) {
  const state: AppState = yield select();
  if (state.countries.favorites.length <= 0) {
    yield put(toggleDrawer(false));
  }
}

export default [takeLatest(REMOVE_COUNTRY, closingDrawer)];
