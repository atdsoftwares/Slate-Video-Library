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
      case "REMOVE_ONEVIDEO_FROM_HISTORY":
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
  console.log(
    "🚀 ~ file: HistorypageContext.js ~ line 29 ~ HistorypageContext ~ getHistory",
    getHistory
  );

  const addToHistoryFn = async (videoData, setHistoryFn) => {
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
  };

  const getHistoryFn = async () => {
    const response = await axios({
      method: "GET",
      url: `/api/user/history`,
      headers: { authorization: localStorage.getItem("token") },
    });
    setHistoryFn({
      type: "GET_HISTORY",
      payload: response.data.history,
    });
  };

  const removeAllHistoryFn = async () => {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/history/all`,
      headers: { authorization: localStorage.getItem("token") },
    });
    setHistoryFn({
      type: "GET_HISTORY",
      payload: response.data.history,
    });
  };

  const removeVideoFromHistoryFn = async (_id) => {
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
