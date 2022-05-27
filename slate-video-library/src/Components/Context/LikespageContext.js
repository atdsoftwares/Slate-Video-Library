import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

const likeContext = createContext();
export const useLikeContext = () => useContext(likeContext);

function LikespageContext({ children }) {
  function reducerFn(state, action) {
    switch (action.type) {
      case "ADD_TO_LIKES":
        return { ...state, addToLikes: action.payload };
      case "GET_LIKED_VIDEOS":
        return { ...state, getLikedVideos: action.payload };
      default:
        return state;
    }
  }

  const [state, setLikesFn] = useReducer(reducerFn, {
    addToLikes: [],
    getLikedVideos: [],
  });

  const { getLikedVideos, addToLikes } = state;

  // add video to watchlater page
  const addToLikesFn = async (videoData, setLikesFn) => {
    const response = await axios({
      method: "POST",
      url: `/api/user/likes`,
      headers: { authorization: localStorage.getItem("token") },
      data: { video: videoData },
    });
    setLikesFn({ type: "ADD_TO_LIKES", payload: response.data.likes });
  };

  const getLikedVideosFn = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `/api/user/likes/`,
        headers: { authorization: localStorage.getItem("token") },
      });
      setLikesFn({
        type: "GET_LIKED_VIDEOS",
        payload: response.data.likes,
      });
    } catch (error) {
      console.log(`something went wrong`, error);
    }
  };

  const removeLikedVideosFn = async (_id) => {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/likes/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: { video: setLikesFn },
    });
    setLikesFn({
      type: "GET_LIKED_VIDEOS",
      payload: response.data.likes,
    });
  };

  return (
    <div>
      <likeContext.Provider
        value={{
          removeLikedVideosFn,
          setLikesFn,
          addToLikesFn,
          getLikedVideosFn,
          getLikedVideos,
        }}
      >
        {children}
      </likeContext.Provider>
    </div>
  );
}

export default LikespageContext;
