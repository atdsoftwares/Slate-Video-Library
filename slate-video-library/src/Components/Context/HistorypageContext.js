import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

const historyContext = createContext({});
export const useHistoryContext = () => useContext(historyContext);

function HistorypageContext({ children }) {
  function reducerFn(state, action) {
    switch (action.type) {
      case "ADD_TO_HISTORY":
        return { ...state, addToHistory: action.payload };
      case "GET_HISTORY":
        return { ...state, getHistory: action.payload };
      case "REMOVE_ALL_HISTORY":
        return { ...state, removeCompleteHistory: action.payload };
      case "REMOVE_VIDEO_FROM_HISTORY":
        return { ...state, removeVideoFromHistory: action.payload };
      default:
        return state;
    }
  }

  const [state, setHistoryFn] = useReducer(reducerFn, {
    addToHistory: [],
    getHistory: [],
    removeCompleteHistory: [],
    removeVideoFromHistory: [],
  });

  const { getHistory } = state;

  const addToHistoryFn = async (videoData, setHistoryFn) => {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/user/history`,
        headers: { authorization: localStorage.getItem("token") },
        data: { video: videoData },
      });
      setHistoryFn({
        type: "ADD_TO_HISTORY",
        payload: response.data.history,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getHistoryFn = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `/api/user/history`,
        headers: { authorization: localStorage.getItem("token") },
      });
      setHistoryFn({
        type: "GET_HISTORY",
        payload: response.data.history,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeAllHistoryFn = async () => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/user/history/all`,
        headers: { authorization: localStorage.getItem("token") },
      });
      setHistoryFn({
        type: "GET_HISTORY",
        payload: response.data.history,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeVideoFromHistoryFn = async (_id) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/api/user/history/${_id}`,
        headers: { authorization: localStorage.getItem("token") },
        data: { video: setHistoryFn },
      });
      setHistoryFn({
        type: "GET_HISTORY",
        payload: response.data.history,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <historyContext.Provider
        value={{
          addToHistoryFn,
          getHistoryFn,
          getHistory,
          removeVideoFromHistoryFn,
          removeAllHistoryFn,
        }}
      >
        {children}
      </historyContext.Provider>
    </div>
  );
}

export default HistorypageContext;
