import {
  usePlaylistContext,
  useSingleVideoContext,
} from "../../Context/IndexAllContext";
import {
  addVideosIntoPlaylistFn,
  makePlaylistFn,
} from "../../Services/PlaylistPageServices";

import "./PlaylistModal.css";

function PlaylistModal() {
  const { dispatch, videoData, inputState } = useSingleVideoContext();
  const { addToPlaylists, setPlaylistFn } = usePlaylistContext();

  return (
    <div>
      <h3 className="playlist-title">Make a playlist</h3>
      <div className="playlist-modal">
        <input
          type="text"
          class="navigation__input-inputtext"
          placeholder="enter playlist name"
          onChange={(e) =>
            dispatch({ type: "INPUTSTATE", payload: e.target.value })
          }
        />

        <span
          class="material-icons icons"
          onClick={() => makePlaylistFn(setPlaylistFn, inputState)}
        >
          playlist_add
        </span>
      </div>

      {addToPlaylists.map((inputtext) => (
        <div className="print-playlist">
          <input
            type="checkbox"
            className="checkbox"
            onChange={() =>
              addVideosIntoPlaylistFn(inputtext._id, videoData, setPlaylistFn)
            }
          />
          {inputtext.playlistName}
        </div>
      ))}
    </div>
  );
}

export default PlaylistModal;
