import React from "react";

import Flag from "./Flag";

const CountriesRow = ({ data }) => {
  return (
    <tr>
      <td>
        <Flag url={data.flag} name={data.name} />
      </td>
      <td>{data.name}</td>
      <td>
        {data.languages.map(item => {
          return (
            <React.Fragment key={item.name}>
              {item.name}
              <br />
            </React.Fragment>
          );
        })}
      </td>
      <td>{data.population}</td>
      <td>{data.region}</td>
    </tr>
  );
};

CountriesRow.displayName = "CountriesRow";

export default CountriesRow;
