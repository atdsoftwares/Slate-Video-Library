import React from "react";
import App from "./App";
import ExplorepageContext from "./Components/Context/ExplorepageContext";

function Pagestructure() {
  return (
    <div>
      <ExplorepageContext>
        <App />
      </ExplorepageContext>
    </div>
  );
}

export default Pagestructure;
