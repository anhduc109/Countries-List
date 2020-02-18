import React from "react";
import { TableRow, TableCell, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Flag from "./Flag";
import { Country, AppState } from "../types";
import { addCountry } from "../redux/actions";

type CountriesRowProps = {
  data: Country;
};

const CountriesRow = ({ data }: CountriesRowProps) => {
  const dispatch = useDispatch();

  const favoriteCountries = useSelector(
    (state: AppState) => state.countries.favorites
  );

  // checks whether an element is existed
  const existed = (country: Country) => country.name === data.name;

  const exsistedInFavoriteCountries = favoriteCountries.some(existed);

  return (
    <TableRow hover={true}>
      <TableCell>
        <Flag url={data.flag} name={data.name} />
      </TableCell>
      <TableCell>
        <Link
          className="country-link"
          to={{ pathname: `/${data.name}`, state: { data: data } }}
        >
          {data.name}
        </Link>
        <IconButton
          className="fav-btn"
          onClick={() => dispatch(addCountry(data))}
        >
          <FavoriteIcon
            color={exsistedInFavoriteCountries ? "secondary" : "action"}
            className="fav-icon"
            fontSize="small"
          />
        </IconButton>
      </TableCell>
      <TableCell>
        {data.languages.map(item => {
          return (
            <React.Fragment key={item.name}>
              {item.name}
              <br />
            </React.Fragment>
          );
        })}
      </TableCell>
      <TableCell>{data.population}</TableCell>
      <TableCell>{data.region}</TableCell>
    </TableRow>
  );
};

CountriesRow.displayName = "CountriesRow";

export default CountriesRow;
