import React, { useEffect } from "react";
import { usePlaylistContext } from "../../Components/Context/PlaylistpageContext";
import { useSingleVideoContext } from "../../Components/Context/SingleVideopageContext";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Playlistspage.css";
function Playlistspage() {
  const {
    addToPlaylists,
    removePlaylistFn,
    getPlaylistsFn,
  } = usePlaylistContext();

  useEffect(() => {
    getPlaylistsFn();
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />

      <div className="playlist-container">
        {addToPlaylists.map((playlistData) => (
          <div>
            <div className="playlistdata">
              <span className="material-icons playlisticon">playlist_play</span>
              <div className="playlistpage">
                Playlist {playlistData.playlistName}
              </div>
            </div>
            <span
              className="material-icons playlistmi"
              onClick={(_id) => removePlaylistFn(playlistData._id)}
            >
              delete
            </span>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Playlistspage;
