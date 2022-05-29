import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
      <h1 className="historypage-title"> PLAYLISTS PAGE</h1>
      <div className="playlist-container">
        {addToPlaylists.length <= 0 ? (
          <h3 className="historypage-title">
            {" "}
            THERE ARE NO PLAYLIST TO DISPLAY{" "}
          </h3>
        ) : (
          addToPlaylists.map((playlistData) => (
            <div>
              <div className="playlistdata">
                <span className="material-icons playlisticon">
                  playlist_play
                </span>
                <Link to={`/playlists/${playlistData._id}`}>
                  <div className="playlistpage">
                    Playlist {playlistData.playlistName}
                  </div>
                </Link>
              </div>
              <span
                className="material-icons playlistmi"
                onClick={(_id) => removePlaylistFn(playlistData._id)}
              >
                delete
              </span>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Playlistspage;
