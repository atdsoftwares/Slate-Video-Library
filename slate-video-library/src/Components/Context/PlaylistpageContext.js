import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import SingleVideopage from "../../Pages/SingleVideoPage/SingleVideopage";
import SingleVideopageContext, {
  useSingleVideoContext,
} from "./SingleVideopageContext";

const playlistContext = createContext();
export const usePlaylistContext = () => useContext(playlistContext);

function PlaylistpageContext({ children }) {
  const { inputState } = useSingleVideoContext();

  function reducerFn(state, action) {
    switch (action.type) {
      case "ADD_TO_PLAYLISTS":
        return { ...state, addToPlaylists: action.payload };
      case "GET_PLAYLISTS":
        return { ...state, getPlaylists: action.payload };

      default:
        return state;
    }
  }

  const [state, setPlaylistFn] = useReducer(reducerFn, {
    addToPlaylists: [],
    getPlaylists: [],
  });

  const { addToPlaylists, getPlaylists } = state;

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
        type: "ADD_TO_PLAYLISTS",
        payload: response.data.playlists,
      });
    } catch (error) {
      console.log(error);
    }
  }

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

  async function removePlaylistFn(_id) {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/user/playlists/${_id}`,
        headers: { authorization: localStorage.getItem("token") },
        data: { video: setPlaylistFn },
      });
      setPlaylistFn({
        type: "ADD_TO_PLAYLISTS",
        payload: response.data.playlists,
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
        }}
      >
        {children}
      </playlistContext.Provider>
    </div>
  );
}

export default PlaylistpageContext;
