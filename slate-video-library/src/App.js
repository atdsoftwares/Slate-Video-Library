import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Explorepage from "./Pages/Explorepage/Explorepage";
import Historypage from "./Pages/Historypage/Historypage";
import Homepage from "./Pages/Homepage/Homepage";
import Likespage from "./Pages/Likespage/Likespage";
import Playlistpage from "./Pages/Playlistpage/Playlistpage";
import Singlevideopage from "./Pages/SInglevideopage/Singlevideopage";
import Watchlaterpage from "./Pages/Watchlaterpage/Watchlaterpage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route exact path="/explore" element={<Explorepage />} />
        <Route exact path="/explore/:_id" element={<Singlevideopage />} />
        <Route path="/playlists" exact element={<Playlistpage />} />
        <Route path="/likes" exact element={<Likespage />} />
        <Route path="/watchlater" exact element={<Watchlaterpage />} />
        <Route path="/history" exact element={<Historypage />} />
      </Routes>
    </div>
  );
}
export default App;
