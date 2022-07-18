import { Link, useEffect } from "../../Utils/CustomUtils";
import { usePlaylistContext } from "../../Context/IndexAllContext";
import "./Playlistspage.css";
import { Footer, Header, Sidebar } from "../../Components/IndexAllComponents";
import {
  getPlaylistsFn,
  removePlaylistFn,
} from "../../Services/PlaylistPageServices";

function Playlistspage() {
  const { addToPlaylists, setPlaylistFn } = usePlaylistContext();

  useEffect(() => {
    getPlaylistsFn(setPlaylistFn);
  }, []);

  return (
    <div>
      <Header />
      <div
        className="likes-page-sidebar"
        style={{ display: "flex", marginLeft: "15rem" }}
      >
        <Sidebar />
        <div className="playlist-container">
          {addToPlaylists.length <= 0 ? (
            <h3 className="historypage-title">
              {" "}
              THERE ARE NO PLAYLIST TO DISPLAY{" "}
            </h3>
          ) : (
            addToPlaylists &&
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
                  onClick={() =>
                    removePlaylistFn(playlistData._id, setPlaylistFn)
                  }
                >
                  delete
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Playlistspage;
