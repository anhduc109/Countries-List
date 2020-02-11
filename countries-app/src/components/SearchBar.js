import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    width: "80%",
    marginBottom: "30px"
  }
}));

const SearchBar = ({ handleSearchInput }) => {
  const classes = useStyles();

  return (
    <div className="search-wrapper">
      <TextField
        className={classes.root}
        type="text"
        onChange={handleSearchInput}
        label="Search for a country"
      />
    </div>
  );
};

SearchBar.displayName = "SearchBar";

export default SearchBar;
