import React from "react";
import App from "./App";
import ExplorepageContext from "./Components/Context/ExplorepageContext";
import SingleVideopageContext from "./Components/Context/SingleVideopageContext";

function Pagestructure() {
  return (
    <div>
      <ExplorepageContext>
        <SingleVideopageContext>
          <App />
        </SingleVideopageContext>
      </ExplorepageContext>
    </div>
  );
}

export default Pagestructure;
