import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";

const explorePage = createContext();
export const useExplorePageContext = () => useContext(explorePage);

function ExplorepageContext({ children }) {
  function reducerFn(state, action) {
    switch (action.type) {
      case "APIVIDEOSDATA":
        return { ...state, videosdata: action.payload };

      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducerFn, {
    videosdata: [],
  });
  const { videosdata } = state;
  const { _id, title } = videosdata;

  console.log(`videosdata`, videosdata);

  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    try {
      await axios({
        method: "GET",
        url: `/api/videos`,
      }).then((response) =>
        dispatch({
          type: "APIVIDEOSDATA",
          payload: response.data.videos,
        })
      );
    } catch (error) {
      console.log(`something went wrong`, error);
    }
  }
  return (
    <div>
      <explorePage.Provider value={{ _id, title, state, dispatch }}>
        {children}
      </explorePage.Provider>
    </div>
  );
}

export default ExplorepageContext;
