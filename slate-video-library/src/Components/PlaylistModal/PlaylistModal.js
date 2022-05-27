import React, { useState } from "react";
import { usePlaylistContext } from "../Context/PlaylistpageContext";
import { useSingleVideoContext } from "../Context/SingleVideopageContext";
import "./PlaylistModal.css";

function PlaylistModal() {
  const { modalState, dispatch } = useSingleVideoContext();

  const { makePlaylistFn, addToPlaylists } = usePlaylistContext();

  return (
    <div className="playlist-modal" style={{ display: modalState }}>
      <span
        class="material-icons modalmi"
        onClick={() => dispatch({ type: "MODALSTATE", payload: "none" })}
      >
        cancel
      </span>
      <div className="playlist-title">Make a playlist</div>
      <div className="inputs">
        <input
          type="text"
          class="navigation__input-inputtext"
          placeholder="enter playlist name"
          onChange={(e) =>
            dispatch({ type: "INPUTSTATE", payload: e.target.value })
          }
        />{" "}
        <span class="material-icons icons" onClick={makePlaylistFn}>
          playlist_add
        </span>
      </div>

      {addToPlaylists.map((inputtext) => (
        <div className="print-playlist">
          <input type="checkbox" className="checkbox" />
          {inputtext.playlistName}
        </div>
      ))}
    </div>
  );
}

export default PlaylistModal;
