import React from "react";

import "../styles/host.css"

const Host = ({ host }) => {
  const isHostNameSplited = host.name.split(" ");
  const [name, lastname] = isHostNameSplited;

  return (
    <div className="hostStyle">
      <div className="hostNameStyle">
        <p>{name.trim()}</p>
        <p>{lastname.trim()}</p>
      </div>

      <img src={host.picture} alt="" className="hostPicStyle" />
    </div>
  );
};

export default Host;