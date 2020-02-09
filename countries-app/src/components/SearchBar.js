import React from "react";

const SearchBar = ({ handleSearchInput }) => {
  return (
    <div className="search-wrapper">
      <input
        className="search-bar"
        type="text"
        onChange={handleSearchInput}
        placeholder="Search for a country ..."
      />
    </div>
  );
};

export default SearchBar;
