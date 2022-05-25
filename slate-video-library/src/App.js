import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Explorepage from "./Pages/Explorepage/Explorepage";
import Homepage from "./Pages/Homepage/Homepage";
import SingleVideopage from "./Pages/SingleVideoPage/SingleVideopage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/explore" element={<Explorepage />} />
        <Route exact path="/explore/:_id" element={<SingleVideopage />} />
      </Routes>
    </div>
  );
}
export default App;
