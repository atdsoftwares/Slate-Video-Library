import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const singleVideoContext = createContext();
export const useSingleVideoContext = () => useContext(singleVideoContext);

function SingleVideopageContext({ children }) {
  const [videoId, setVideoId] = useState();
  const [videoData, setVideoData] = useState([]);

  // function reducerFn(state, action) {
  //   switch (action.type) {
  //     case "SINGLEVIDEODATA":
  //       return { ...state, videoData: action.payload };
  //     case "SINGLEVIDEID":
  //       return { ...state, videoId: action.payload };
  //     default:
  //       return state;
  //   }
  // }
  // const [state, dispatch] = useReducer(reducerFn, {
  //   videoData: [],
  //   videoId: "",
  // });

  // const { videoId, videoData } = state;

  async function getSingleVideos() {
    try {
      await axios
        .get(`/api/video/${videoId}`)
        .then((response) => setVideoData(response.data.video));
    } catch (error) {
      console.log(`something went wrong`, error);
    }
  }

  useEffect(() => {
    getSingleVideos();
  }, [videoId]);

  console.log(videoId);
  console.log(`video data`, videoData);

  return (
    <div>
      <singleVideoContext.Provider
        value={{ setVideoId, setVideoData, videoId, videoData }}
      >
        {children}
      </singleVideoContext.Provider>
    </div>
  );
}

export default SingleVideopageContext;
