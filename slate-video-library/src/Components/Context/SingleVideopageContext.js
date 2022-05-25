import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const singleVideoContext = createContext();
export const useSingleVideoContext = () => useContext(singleVideoContext);

function SingleVideopageContext({ children }) {
  const [videoId, setVideoId] = useState();
  const [videoData, setVideoData] = useState([]);
  console.log(videoId);

  useEffect(() => {
    axios
      .get(`/api/video/${videoId}`)
      .then((response) => setVideoData(response.data.video));
  }, [videoId]);

  console.log(videoId);
  console.log(`video data`, videoData);
  return (
    <div>
      <singleVideoContext.Provider value={{ setVideoId, videoData }}>
        {children}
      </singleVideoContext.Provider>
    </div>
  );
}

export default SingleVideopageContext;
