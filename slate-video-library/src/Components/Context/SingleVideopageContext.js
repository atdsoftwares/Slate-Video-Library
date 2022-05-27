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
      case "MODALSTATE":
        return { ...state, modalState: action.payload };
      case "INPUTSTATE":
        return { ...state, inputState: action.payload };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducerFn, {
    videoData: [],
    modalState: "none",
    inputState: "",
  });

  const { videoData, modalState, inputState } = state;

  // get single video complete data from url parameters
  async function getSingleVideosFn() {
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
    getSingleVideosFn();
  }, [videoId]);

  return (
    <div>
      <singleVideoContext.Provider
        value={{
          setVideoId,
          videoData,
          modalState,
          inputState,
          dispatch,
        }}
      >
        {children}
      </singleVideoContext.Provider>
    </div>
  );
}

export default SingleVideopageContext;
