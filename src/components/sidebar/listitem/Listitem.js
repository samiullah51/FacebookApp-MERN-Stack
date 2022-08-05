import React from "react";
import "./Listitem.css";
function Listitem({ iconName, title }) {
  return (
    <div className="list__item">
      {iconName}
      <p>{title}</p>
    </div>
  );
}

export default Listitem;
