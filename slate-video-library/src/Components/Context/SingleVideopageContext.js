import axios from "axios";
import { response } from "express";
import React, { createContext, useContext, useEffect, useState } from "react";

const singleVideoContext = createContext();
export const useSingleVideoContext = () => useContext(singleVideoContext);
function SingleVideopageContext({ children }) {
  const [videoData, setVideoData] = useState([]);
  const [videoId, setVideoId] = useState();
  console.log(videoId);
  console.log(videoData);

  return (
    <div>
      <singleVideoContext.Provider value={{ setVideoId }}>
        {children}
      </singleVideoContext.Provider>
    </div>
  );
}

export default SingleVideopageContext;
