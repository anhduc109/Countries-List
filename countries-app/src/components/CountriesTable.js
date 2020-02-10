import React from "react";

import CountriesRow from "./CountriesRow";

const CountriesTable = ({ data, handleIsAsc, isAsc, filteredField }) => {
  return (
    <table className="country-table">
      <thead>
        <tr>
          <th>Flag</th>
          <th>
            Name
            {filteredField === "name" && isAsc ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-symbol"
                viewBox="0 0 24 24"
                onClick={() => handleIsAsc("name")}
              >
                <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-symbol"
                viewBox="0 0 24 24"
                onClick={() => handleIsAsc("name")}
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            )}
          </th>
          <th>Languages</th>
          <th>
            Population
            {filteredField === "population" && isAsc ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-symbol"
                viewBox="0 0 24 24"
                onClick={() => handleIsAsc("population")}
              >
                <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-symbol"
                viewBox="0 0 24 24"
                onClick={() => handleIsAsc("population")}
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            )}
          </th>
          <th>
            Region
            {filteredField === "region" && isAsc ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-symbol"
                viewBox="0 0 24 24"
                onClick={() => handleIsAsc("region")}
              >
                <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-symbol"
                viewBox="0 0 24 24"
                onClick={() => handleIsAsc("region")}
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            )}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(country => {
          return <CountriesRow data={country} key={country.name} />;
        })}
      </tbody>
    </table>
  );
};

CountriesTable.displayName = "CountriesTable";

export default CountriesTable;
