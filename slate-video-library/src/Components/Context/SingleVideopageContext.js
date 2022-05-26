import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const singleVideoContext = createContext();
export const useSingleVideoContext = () => useContext(singleVideoContext);

function SingleVideopageContext({ children }) {
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlMzIzZmY2MC1hMTUzLTQ0MTYtYmEyNS0zNDQ0ZGI1NjliOWMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ._-fah2UEuueLmRHHl5uV4CYhiQdODX6neUkGbfTvtFM`;
  localStorage.setItem("token", token);

  const [videoId, setVideoId] = useState();

  function reducerFn(state, action) {
    switch (action.type) {
      case "SINGLEVIDEODATA":
        return { ...state, videoData: action.payload };
      case "SINGLEVIDEOLIKES":
        return { ...state, SinglevideoLikes: action.payload };
      case "WATCHLATER":
        return { ...state, SinglevideoWatchLater: action.payload };
      case "MODALSTATE":
        return { ...state, modalState: action.payload };
      case "INPUTSTATE":
        return { ...state, inputState: action.payload };
      case "PLAYLIST":
        return { ...state, playlists: action.payload };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducerFn, {
    videoData: [],
    SinglevideoLikes: [],
    SinglevideoWatchLater: [],
    modalState: "none",
    inputState: "",
    playlists: [],
  });

  const {
    videoData,
    SinglevideoLikes,
    SinglevideoWatchLater,
    modalState,
    inputState,
    playlists,
  } = state;

  // get single video data from url parameters
  async function getSingleVideos() {
    try {
      await axios.get(`/api/video/${videoId}`).then((response) =>
        dispatch({
          type: "SINGLEVIDEODATA",
          payload: response.data.video,
        })
      );
    } catch (error) {
      console.log(`something went wrong`, error);
    }
  }

  useEffect(() => {
    getSingleVideos();
  }, [videoId]);

  // set likes for individual single video

  const likedVideo = async (videoData, dispatch) => {
    const response = await axios({
      method: "POST",
      url: `/api/user/likes`,
      headers: { authorization: localStorage.getItem("token") },
      data: { video: videoData },
    });

    dispatch({ type: "SINGLEVIDEOLIKES", payload: response.data.likes });
  };

  // add to watch later  a individual single video

  const watchLaterVideo = async (videoData, dispatch) => {
    const response = await axios({
      method: "POST",
      url: `/api/user/watchlater`,
      headers: { authorization: localStorage.getItem("token") },
      data: { video: videoData },
    });

    dispatch({
      type: "WATCHLATER",
      payload: response.data.watchlater,
    });
  };

  // make a playlist
  async function postPlaylist() {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/user/playlists`,
        headers: { authorization: localStorage.getItem("token") },
        data: {
          playlist: { playlistName: inputState },
        },
      });
      dispatch({
        type: "PLAYLIST",
        payload: response.data.playlists,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <singleVideoContext.Provider
        value={{
          setVideoId,
          videoData,
          dispatch,
          likedVideo,
          watchLaterVideo,
          modalState,
          inputState,
          playlists,
          postPlaylist,
        }}
      >
        {children}
      </singleVideoContext.Provider>
    </div>
  );
}

export default SingleVideopageContext;
