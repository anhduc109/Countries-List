import {
  CountriesState,
  CountryActions,
  FETCH_DATA_START,
  FETCH_DATA_SUCCEED,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  ADD_COUNTRIES_FROM_LOCAL_STORAGE,
  CHANGE_KEYWORD
} from "../../types";

export default function country(
  state: CountriesState = {
    isFetching: false,
    countriesAPI: [],
    keyword: "",
    favorites: []
  },
  action: CountryActions
): CountriesState {
  switch (action.type) {
    case FETCH_DATA_START: {
      const { isFetching } = action.payload;
      return { ...state, isFetching };
    }

    case FETCH_DATA_SUCCEED: {
      const { countriesAPI, isFetching } = action.payload;
      return { ...state, isFetching, countriesAPI };
    }

    case CHANGE_KEYWORD: {
      const { keyword } = action.payload;
      return { ...state, keyword };
    }

    case ADD_COUNTRY: {
      const { country } = action.payload;
      if (state.favorites.find(p => p.name === country.name)) {
        return state;
      }
      // Always return new state (e.g, new object) if changed
      return { ...state, favorites: [...state.favorites, country] };
    }

    case REMOVE_COUNTRY: {
      const { country } = action.payload;
      const index = state.favorites.findIndex(p => p.name === country.name);
      if (index >= 0) {
        state.favorites.splice(index, 1);
        return { ...state, favorites: [...state.favorites] };
      }
      return state;
    }

    case ADD_COUNTRIES_FROM_LOCAL_STORAGE: {
      const { countries } = action.payload;
      return {
        ...state,
        favorites: countries
      };
    }

    default:
      return state;
  }
}
