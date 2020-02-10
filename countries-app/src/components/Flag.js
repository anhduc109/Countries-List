import React from "react";

const Flag = ({ url, name }) => {
  return <img className="flag-img" src={url} alt={`${name} flag`} />;
};

Flag.displayName = "Flag";

export default Flag;
