import {
  Footer,
  Header,
  Sidebar,
  SmallVideoCards,
} from "../../Components/IndexAllComponents";
import { usePlaylistContext } from "../../Context/IndexAllContext";
import {
  deleteVideosInsidePlaylistFn,
  getVideosFromPlaylistsFn,
} from "../../Services/PlaylistPageServices";
import { useEffect, useParams, useState } from "../../Utils/CustomUtils";

function PlaylistViewpage() {
  const { getVideosFromPlaylists, setPlaylistFn } = usePlaylistContext();
  const playlistId = useParams();
  useEffect(() => {
    getVideosFromPlaylistsFn(playlistId, setPlaylistFn);
  }, []);

  return (
    <div>
      <Header />
      <div
        className="likes-page-sidebar"
        style={{ display: "flex", marginLeft: "5rem" }}
      >
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
                    deleteVideosInsidePlaylistFn(
                      playlistId,
                      playlistData._id,
                      setPlaylistFn
                    )
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

export default PlaylistViewpage;
