import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePlaylistContext } from "../../Components/Context/PlaylistpageContext";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SmallVideoCards from "../../Components/SmallVideoCards/SmallVideoCards";

function PlaylistViewpage() {
  const {
    setPlaylistId,
    getVideosFromPlaylists,
    getVideosFromPlaylistsFn,
    deleteVideosInsidePlaylistFn,
  } = usePlaylistContext();

  const params = useParams();
  setPlaylistId(params);
  console.log(params);

  useEffect(() => {
    getVideosFromPlaylistsFn();
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />

      <div className="watchlater-container">
        {getVideosFromPlaylists.length <= 0 ? (
          <h3 className="watchlaterpage-title">
            THERE ARE NO VIDEOS IN PLAYLIST
          </h3>
        ) : (
          getVideosFromPlaylists.map((playlistData) => (
            <div className="watchlaterdata">
              <SmallVideoCards props={playlistData.videoUrl} />
              <span
                className="material-icons watchlatermi"
                onClick={() =>
                  deleteVideosInsidePlaylistFn(params, playlistData._id)
                }
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

export default PlaylistViewpage;
