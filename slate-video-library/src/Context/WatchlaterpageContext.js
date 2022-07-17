import { createContext, useContext, useReducer } from "../Utils/CustomUtils";

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

  return (
    <div>
      <watchLaterContext.Provider
        value={{
          setWatchLaterFn,
          getWatchLaterVideos,
          addTowatchLater,
        }}
      >
        {children}
      </watchLaterContext.Provider>
    </div>
  );
}

export default WatchlaterpageContext;
