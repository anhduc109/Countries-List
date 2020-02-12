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

  console.log("rendering");

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

// Optimization with React.memo
export default React.memo(SearchBar);

SearchBar.displayName = "SearchBar";
