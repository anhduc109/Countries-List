import React from "react";

const Flag = ({ url, name }) => {
  return <img className="flag-img" src={url} alt={`${name} flag`} />;
};

export default Flag;
