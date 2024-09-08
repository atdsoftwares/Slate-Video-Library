import React from "react";
import ReactDOM from "react-dom";
import { makeServer } from "./server";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Explorepage from "./Pages/Explorepage/Explorepage";
import Pagestructure from "./Pagestructure";
import { ChakraProvider } from "@chakra-ui/react";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Pagestructure />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
