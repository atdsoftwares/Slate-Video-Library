import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Authentication from "./Components/Authentication/Authentication";
import Pagenotfound from "./Components/PageNotFound/Pagenotfound";
import Accountpage from "./Pages/Accountpage/Accountpage";
import Explorepage from "./Pages/Explorepage/Explorepage";
import Historypage from "./Pages/Historypage/Historypage";
import Homepage from "./Pages/Homepage/Homepage";
import Likespage from "./Pages/Likespage/Likespage";
import Loginpage from "./Pages/Loginpage/Loginpage";
import Playlistspage from "./Pages/Playlistspage/Playlistspage";
import PlaylistViewpage from "./Pages/Playlistspage/PlaylistViewpage";
import SingleVideopage from "./Pages/SingleVideoPage/SingleVideopage";
import Signuppage from "./Pages/Singuppage/Signuppage";
import Watchlaterpage from "./Pages/Watchlaterpage/Watchlaterpage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/explore" element={<Explorepage />} />
        <Route exact path="/explore/:_id" element={<SingleVideopage />} />
        <Route
          exact
          path="/playlists"
          element={
            <Authentication>
              <Playlistspage />
            </Authentication>
          }
        />
        <Route exact path="/playlists/:_id" element={<PlaylistViewpage />} />
        <Route
          exact
          path="/likes"
          element={
            <Authentication>
              <Likespage />
            </Authentication>
          }
        />
        <Route
          exact
          path="/watchlater"
          element={
            <Authentication>
              <Watchlaterpage />
            </Authentication>
          }
        />
        <Route
          exact
          path="/history"
          element={
            <Authentication>
              <Historypage />
            </Authentication>
          }
        />
        <Route exact path="/login" element={<Loginpage />} />
        <Route exact path="/signup" element={<Signuppage />} />
        <Route
          exact
          path="/accounts"
          element={
            <Authentication>
              <Accountpage />
            </Authentication>
          }
        />
        <Route exact path="*" element={<Pagenotfound />} />
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
