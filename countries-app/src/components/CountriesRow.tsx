import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

import Flag from "./Flag";
import { Country } from "../types";

type CountriesRowProps = {
  data: Country;
};

const CountriesRow = ({ data }: CountriesRowProps) => {
  return (
    <TableRow>
      <TableCell>
        <Flag url={data.flag} name={data.name} />
      </TableCell>
      <TableCell>{data.name}</TableCell>
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
