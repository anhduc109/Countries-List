import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel
} from "@material-ui/core";

import CountriesRow from "./CountriesRow";
import { HandleIsAsc, Country } from "../types";

type CountriesTableProps = {
  data: Country[] | null;
  handleIsAsc: HandleIsAsc;
  isAsc: Boolean;
  filteredField: string;
};

//Styling Material UI
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#b388ff"
  }
}))(TableCell);

const StyledTableSortLabel = withStyles(theme => ({
  root: {
    color: "white"
  }
}))(TableSortLabel);

const CountriesTable = ({
  data,
  handleIsAsc,
  isAsc,
  filteredField
}: CountriesTableProps) => {
  return (
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <StyledTableCell>Flag</StyledTableCell>
          <StyledTableCell>
            <StyledTableSortLabel
              active={true}
              direction={isAsc && filteredField === "name" ? "asc" : "desc"}
              onClick={() => handleIsAsc("name")}
            >
              Name
            </StyledTableSortLabel>
          </StyledTableCell>
          <StyledTableCell>Languages</StyledTableCell>
          <StyledTableCell>
            <StyledTableSortLabel
              active={true}
              direction={
                isAsc && filteredField === "population" ? "asc" : "desc"
              }
              onClick={() => handleIsAsc("population")}
            >
              Population
            </StyledTableSortLabel>
          </StyledTableCell>
          <StyledTableCell>
            <StyledTableSortLabel
              active={true}
              direction={isAsc && filteredField === "region" ? "asc" : "desc"}
              onClick={() => handleIsAsc("region")}
            >
              Region
            </StyledTableSortLabel>
          </StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data &&
          data.map(country => {
            return <CountriesRow data={country} key={country.name} />;
          })}
      </TableBody>
    </Table>
  );
};

CountriesTable.displayName = "CountriesTable";

export default CountriesTable;
