import {
  createContext,
  toast,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "../Utils/CustomUtils";
import { getSingleVideosFn } from "../Services/SingleVideoPageServices";

const singleVideoContext = createContext();
export const useSingleVideoContext = () => useContext(singleVideoContext);

function SingleVideopageContext({ children }) {
  const [videoId, setVideoId] = useState();

  function reducerFn(state, action) {
    switch (action.type) {
      case "SINGLEVIDEODATA":
        return { ...state, videoData: action.payload };
      case "INPUTSTATE":
        return { ...state, inputState: action.payload };
      case "NOTESTAKINGBOXSTATE":
        return { ...state, notesTakingBoxState: action.payload };
      case "PLAYLISTBOXSTATE":
        return { ...state, playlistBoxState: action.payload };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducerFn, {
    videoData: [],
    inputState: "",
    notesTakingBoxState: "none",
    playlistBoxState: "none",
  });

  const { videoData, inputState, notesTakingBoxState, playlistBoxState } =
    state;

  useEffect(() => {
    getSingleVideosFn(videoId, dispatch);
  }, [videoId]);

  // toggle notes app
  const toggleNotesApp = () => {
    const token = localStorage.getItem("token");
    token
      ? dispatch({
          type: "NOTESTAKINGBOXSTATE",
          payload: notesTakingBoxState === "none" ? "block" : "none",
        })
      : toast.error(`Login First`);
  };

  // toggle playlist app

  const togglePlaylistApp = () => {
    dispatch({
      type: "PLAYLISTBOXSTATE",
      payload: playlistBoxState === "none" ? "block" : "none",
    });
  };
  return (
    <div>
      <singleVideoContext.Provider
        value={{
          setVideoId,
          videoData,
          inputState,
          dispatch,
          notesTakingBoxState,
          playlistBoxState,
          toggleNotesApp,
          togglePlaylistApp,
        }}
      >
        {children}
      </singleVideoContext.Provider>
    </div>
  );
}

export default SingleVideopageContext;
