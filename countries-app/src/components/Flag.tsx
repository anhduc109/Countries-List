import React from "react";

type FlagProps = {
  url: string;
  name: string;
};

const Flag = ({ url, name }: FlagProps) => {
  return <img className="flag-img" src={url} alt={`${name} flag`} />;
};

Flag.displayName = "Flag";

export default Flag;
