import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Explorepage from "./Pages/Explorepage/Explorepage";
import Historypage from "./Pages/Historypage/Historypage";
import Homepage from "./Pages/Homepage/Homepage";
import Likespage from "./Pages/Likespage/Likespage";
import Playlistspage from "./Pages/Playlistspage/Playlistspage";
import PlaylistViewpage from "./Pages/Playlistspage/PlaylistViewpage";
import SingleVideopage from "./Pages/SingleVideoPage/SingleVideopage";
import Watchlaterpage from "./Pages/Watchlaterpage/Watchlaterpage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/explore" element={<Explorepage />} />
        <Route exact path="/explore/:_id" element={<SingleVideopage />} />
        <Route exact path="/playlists" element={<Playlistspage />} />
        <Route exact path="/playlists/:_id" element={<PlaylistViewpage />} />
        <Route exact path="/likes" element={<Likespage />} />
        <Route exact path="/watchlater" element={<Watchlaterpage />} />
        <Route exact path="/history" element={<Historypage />} />
      </Routes>
    </div>
  );
}
export default App;
