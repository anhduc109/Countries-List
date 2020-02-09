import React from "react";

import CountriesRow from "./CountriesRow";

const CountriesTable = ({ data }) => {
  return (
    <table className="country-table">
      <thead>
        <tr>
          <th>Flag</th>
          <th>Name</th>
          <th>Languages</th>
          <th>Population</th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>
        {data.map((country, index) => {
          return <CountriesRow data={country} key={index} />;
        })}
      </tbody>
    </table>
  );
};

export default CountriesTable;
