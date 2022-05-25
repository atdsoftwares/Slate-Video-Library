import React from "react";
import ReactDOM from "react-dom";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import Pagestructure from "./Pagestructure";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Pagestructure />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
