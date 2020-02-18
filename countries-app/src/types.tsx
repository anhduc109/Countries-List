// Action types
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCEED = "FETCH_DATA_SUCCEED";
export const CHANGE_KEYWORD = "CHANGE_KEYWORD";
export const ADD_COUNTRY = "ADD_COUNTRY";
export const REMOVE_COUNTRY = "REMOVE_COUNTRY";
export const ADD_COUNTRIES_FROM_LOCAL_STORAGE =
  "ADD_COUNTRIES_FROM_LOCAL_STORAGE";
export const TOGGLE_DRAWER = "TOGGLE_DRAWER";

export type FetchDataStartAction = {
  type: typeof FETCH_DATA_START;
  payload: {
    isFetching: boolean;
  };
};

export type FetchDataSucceedAction = {
  type: typeof FETCH_DATA_SUCCEED;
  payload: {
    countriesAPI: Country[];
    isFetching: boolean;
  };
};

export type ChangeKeyWordAction = {
  type: typeof CHANGE_KEYWORD;
  payload: {
    keyword: string;
  };
};

export type AddCountryAction = {
  type: typeof ADD_COUNTRY;
  payload: {
    country: Country;
  };
};

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY;
  payload: {
    country: Country;
  };
};

export type AddCountriesFromLocalStorageAction = {
  type: typeof ADD_COUNTRIES_FROM_LOCAL_STORAGE;
  payload: {
    countries: Country[];
  };
};

export type ToggleDrawerAction = {
  type: typeof TOGGLE_DRAWER;
  payload: {
    isOpen: boolean;
  };
};

// Use this union in reducer
export type CountryActions =
  | FetchDataStartAction
  | FetchDataSucceedAction
  | AddCountryAction
  | RemoveCountryAction
  | AddCountriesFromLocalStorageAction
  | ChangeKeyWordAction;

export type CountriesState = {
  isFetching: boolean;
  countriesAPI: Country[];
  keyword: string;
  favorites: Country[];
};

export type UIState = {
  toggleDrawer: boolean;
};

export type AppState = {
  countries: CountriesState;
  ui: UIState;
};

export type Language = {
  name: string;
};

export type Country = {
  name: string;
  alpha3Code: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  flag: string;
  languages: Language[];
  capital: string;
  borders: string[];
  callingCodes: string[];
};

export type HandleIsAsc = (field: string) => void;

export type HandleSearchInput = (
  evt: React.ChangeEvent<HTMLInputElement>
) => void;
