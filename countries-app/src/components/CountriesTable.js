import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel
} from "@material-ui/core";

import CountriesRow from "./CountriesRow";

const CountriesTable = ({ data, handleIsAsc, isAsc, filteredField }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Flag</TableCell>
          <TableCell>
            <TableSortLabel
              active={true}
              direction={isAsc && filteredField === "name" ? "asc" : "desc"}
              onClick={() => handleIsAsc("name")}
            >
              Name
            </TableSortLabel>
          </TableCell>
          <TableCell>Languages</TableCell>
          <TableCell>
            <TableSortLabel
              active={true}
              direction={
                isAsc && filteredField === "population" ? "asc" : "desc"
              }
              onClick={() => handleIsAsc("population")}
            >
              Population
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={true}
              direction={isAsc && filteredField === "region" ? "asc" : "desc"}
              onClick={() => handleIsAsc("region")}
            >
              Region
            </TableSortLabel>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(country => {
          return <CountriesRow data={country} key={country.name} />;
        })}
      </TableBody>
    </Table>
  );
};

CountriesTable.displayName = "CountriesTable";

export default CountriesTable;
