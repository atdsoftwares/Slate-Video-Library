import React, { useState } from "react";
import { usePlaylistContext } from "../Context/PlaylistpageContext";
import { useSingleVideoContext } from "../Context/SingleVideopageContext";
import "./PlaylistModal.css";

function PlaylistModal() {
  const { playlistBoxState, dispatch } = useSingleVideoContext();
  const { videoData } = useSingleVideoContext();
  const { makePlaylistFn, addToPlaylists, addVideosIntoPlaylistFn } =
    usePlaylistContext();

  return (
    <div className="playlist-modal" style={{ display: playlistBoxState }}>
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
          <input
            type="checkbox"
            className="checkbox"
            onChange={() => addVideosIntoPlaylistFn(inputtext._id, videoData)}
          />
          {inputtext.playlistName}
        </div>
      ))}
    </div>
  );
}

export default PlaylistModal;
