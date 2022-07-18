import { createContext, useContext, useReducer } from "../Utils/CustomUtils";

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

  const { getHistory, addToHistory, removeVideoFromHistory } = state;

  return (
    <div>
      <historyContext.Provider
        value={{
          getHistory,
          addToHistory,
          removeVideoFromHistory,
          setHistoryFn,
        }}
      >
        {children}
      </historyContext.Provider>
    </div>
  );
}

export default HistorypageContext;
