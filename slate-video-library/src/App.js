import React from "react";
import { Route, Router, Routes } from "react-router-dom";

import "./App.css";
import Explorepage from "./Pages/Explorepage/Explorepage";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/explore" element={<Explorepage />} />
      </Routes>
    </div>
  );
}
export default App;
