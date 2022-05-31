import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import SingleVideopage from "../../Pages/SingleVideoPage/SingleVideopage";
import Toast from "../Toast/Toast";
import SingleVideopageContext, {
  useSingleVideoContext,
} from "./SingleVideopageContext";

const playlistContext = createContext();
export const usePlaylistContext = () => useContext(playlistContext);

function PlaylistpageContext({ children }) {
  const { inputState } = useSingleVideoContext();
  const [playlistId, setPlaylistId] = useState();

  function reducerFn(state, action) {
    switch (action.type) {
      case "ADD_PLAYLISTS":
        return { ...state, addToPlaylists: action.payload };
      case "GET_PLAYLISTS":
        return { ...state, getPlaylists: action.payload };
      case "ADD_VIDEOS_TO_PLAYLISTS":
        return { ...state, addVideosToPlaylists: action.payload };
      case "GET_VIDEOS_FROM_PLAYLISTS":
        return { ...state, getVideosFromPlaylists: action.payload };
      default:
        return state;
    }
  }

  const [state, setPlaylistFn] = useReducer(reducerFn, {
    addToPlaylists: [],
    getPlaylists: [],
    getVideosFromPlaylists: [],
    addVideosToPlaylists: [],
  });

  const {
    addToPlaylists,
    getPlaylists,
    getVideosFromPlaylists,
    addVideosToPlaylists,
  } = state;
  console.log(
    "🚀 ~ file: PlaylistpageContext.js ~ line 44 ~ PlaylistpageContext ~ addVideosToPlaylists",
    addVideosToPlaylists
  );
  // add a new playlist
  async function makePlaylistFn() {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/user/playlists`,
        headers: { authorization: localStorage.getItem("token") },
        data: {
          playlist: { playlistName: inputState },
        },
      });

      setPlaylistFn({
        type: "ADD_PLAYLISTS",
        payload: response.data.playlists,
      });
      Toast({ type: "success", message: " playlist created" });
    } catch (error) {
      console.log(error);
    }
  }
  // get playlist from DB which have been already added
  const getPlaylistsFn = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `/api/user/playlists/`,
        headers: { authorization: localStorage.getItem("token") },
      });
      setPlaylistFn({
        type: "GET_PLAYLISTS",
        payload: response.data.playlists,
      });
    } catch (error) {
      console.log(`something went wrong`, error);
    }
  };

  // remove playlist from palylist page
  async function removePlaylistFn(_id) {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/user/playlists/${_id}`,
        headers: { authorization: localStorage.getItem("token") },
      });
      setPlaylistFn({
        type: "ADD_PLAYLISTS",
        payload: response.data.playlists,
      });
      Toast({ type: "success", message: " playlist removed" });
    } catch (error) {
      console.log(error);
    }
  }

  // add videos into playlists
  async function addVideosIntoPlaylistFn(_id, data) {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/user/playlists/${_id}`,
        headers: { authorization: localStorage.getItem("token") },
        data: { video: data },
      });
      setPlaylistFn({
        type: "ADD_VIDEOS_TO_PLAYLISTS",
        payload: response.data.playlists,
      });
      Toast({
        type: "success",
        message: `video added into playlist ,${inputState}`,
      });
    } catch (error) {
      console.log(error);
    }
  }
  // get videos from playlists
  async function getVideosFromPlaylistsFn() {
    try {
      const response = await axios({
        method: "GET",
        url: `/api/user/playlists/${playlistId}`,
        headers: { authorization: localStorage.getItem("token") },
      });
      setPlaylistFn({
        type: "GET_VIDEOS_FROM_PLAYLISTS",
        payload: response.data.playlist.videos,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // delete videos inside playlist

  async function deleteVideosInsidePlaylistFn(playlistId, _id) {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/user/playlists/${playlistId._id}/${_id}`,
        headers: { authorization: localStorage.getItem("token") },
      });
      setPlaylistFn({
        type: "GET_VIDEOS_FROM_PLAYLISTS",
        payload: response.data.playlist.videos,
      });
      Toast({
        type: "success",
        message: `video removed from playlist ,${inputState}`,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <playlistContext.Provider
        value={{
          addToPlaylists,
          makePlaylistFn,
          removePlaylistFn,
          getPlaylistsFn,
          addVideosIntoPlaylistFn,
          setPlaylistId,
          getVideosFromPlaylists,
          getVideosFromPlaylistsFn,
          deleteVideosInsidePlaylistFn,
        }}
      >
        {children}
      </playlistContext.Provider>
    </div>
  );
}

export default PlaylistpageContext;
