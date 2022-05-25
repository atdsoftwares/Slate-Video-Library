import React from "react";
import "./Tooltip.css";
function Tooltip({ props }) {
  return (
    <div>
      <div className="tooltip" title={props}>
        {props}
      </div>
    </div>
  );
}

export default Tooltip;
