import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

import CountriesTable from "./CountriesTable";
import useCountries from "../custom-hooks/useCountries";
import { HandleIsAsc, AppState } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      left: "45%",
      top: "40%"
    }
  })
);

const CountriesHome = () => {
  const [filteredField, setFilteredField] = useState("name");
  const [isAsc, setIsAsc] = useState(true);

  const classes = useStyles();

  const searchKeyword = useSelector(
    (state: AppState) => state.countries.keyword
  );

  const isFetching = useSelector(
    (state: AppState) => state.countries.isFetching
  );

  const [countries] = useCountries(searchKeyword, filteredField, isAsc);

  const handleIsAsc: HandleIsAsc = field => {
    setFilteredField(field);
    setIsAsc(!isAsc);
  };

  return (
    <>
      {isFetching ? (
        <CircularProgress
          className={classes.root}
          size={150}
          thickness={1}
          color="secondary"
          disableShrink
        />
      ) : (
        <CountriesTable
          data={countries}
          isAsc={isAsc}
          handleIsAsc={handleIsAsc}
          filteredField={filteredField}
        />
      )}
    </>
  );
};

export default CountriesHome;
