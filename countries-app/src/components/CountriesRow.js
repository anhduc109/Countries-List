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
        {data.languages.map((item, index) => {
          return (
            <React.Fragment key={index}>
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

export default CountriesRow;
