import { createContext, useContext, useReducer } from "../Utils/CustomUtils";

const playlistContext = createContext();
export const usePlaylistContext = () => useContext(playlistContext);

function PlaylistpageContext({ children }) {
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

  return (
    <div>
      <playlistContext.Provider
        value={{
          getVideosFromPlaylists,
          addToPlaylists,
          addVideosToPlaylists,
          getPlaylists,
          setPlaylistFn,
        }}
      >
        {children}
      </playlistContext.Provider>
    </div>
  );
}

export default PlaylistpageContext;
