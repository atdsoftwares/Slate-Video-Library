import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useSingleVideoContext } from "./SingleVideopageContext";

const watchLaterContext = createContext();
export const useWatchLaterContext = () => useContext(watchLaterContext);

function WatchlaterpageContext({ children }) {
  function reducerFn(state, action) {
    switch (action.type) {
      case "ADD_TO_WATCHLATER":
        return { ...state, addTowatchLater: action.payload };
      case "GET_WATCHLATER_VIDEOS":
        return { ...state, getWatchLaterVideos: action.payload };
      default:
        return state;
    }
  }

  const [state, setWatchLaterFn] = useReducer(reducerFn, {
    addTowatchLater: [],
    getWatchLaterVideos: [],
  });

  const { addTowatchLater, getWatchLaterVideos } = state;

  // add video to watchlater page
  const addToWatchLaterVideosFn = async (videoData, setWatchLaterFn) => {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/user/watchlater`,
        headers: { authorization: localStorage.getItem("token") },
        data: { video: videoData },
      });

      setWatchLaterFn({
        type: "ADD_TO_WATCHLATER",
        payload: response.data.watchlater,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getWatchLaterVideosFn = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `/api/user/watchlater/`,
        headers: { authorization: localStorage.getItem("token") },
      });
      setWatchLaterFn({
        type: "GET_WATCHLATER_VIDEOS",
        payload: response.data.watchlater,
      });
    } catch (error) {
      console.log(`something went wrong`, error);
    }
  };

  const removeWatchLaterVideosFn = async (_id) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/user/watchlater/${_id}`,
        headers: { authorization: localStorage.getItem("token") },
        data: { video: setWatchLaterFn },
      });

      setWatchLaterFn({
        type: "GET_WATCHLATER_VIDEOS",
        payload: response.data.watchlater,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <watchLaterContext.Provider
        value={{
          addToWatchLaterVideosFn,
          getWatchLaterVideos,
          setWatchLaterFn,
          getWatchLaterVideosFn,
          removeWatchLaterVideosFn,
        }}
      >
        {children}
      </watchLaterContext.Provider>
    </div>
  );
}

export default WatchlaterpageContext;
