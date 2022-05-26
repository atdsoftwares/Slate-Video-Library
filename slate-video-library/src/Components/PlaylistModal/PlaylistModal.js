import React, { useState } from "react";
import { useSingleVideoContext } from "../Context/SingleVideopageContext";
import "./PlaylistModal.css";

function PlaylistModal() {
  const {
    modalState,
    dispatch,
    playlists,
    postPlaylist,
  } = useSingleVideoContext();

  console.log(playlists);
  return (
    <div className="playlist-modal" style={{ display: modalState }}>
      <span
        class="material-icons modalmi"
        onClick={() => dispatch({ type: "MODALSTATE", payload: "none" })}
      >
        cancel
      </span>
      <div className="playlist-title">Make a playlist</div>
      <div className="input-grid">
        <input
          type="text"
          class="navigation__input-inputtext"
          placeholder="enter playlist name"
          onChange={(e) =>
            dispatch({ type: "INPUTSTATE", payload: e.target.value })
          }
        />{" "}
        <span class="material-icons icons" onClick={postPlaylist}>
          playlist_add
        </span>
      </div>

      {playlists.map((inputtext) => (
        <div className="print-playlist">
          <input type="checkbox" className="checkbox" />
          {inputtext.playlistName}
        </div>
      ))}
    </div>
  );
}

export default PlaylistModal;
