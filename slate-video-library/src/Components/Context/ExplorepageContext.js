import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const explorePage = createContext();
export const useExplorePageContext = () => useContext(explorePage);

function ExplorepageContext({ children }) {
  const [isActive, setActive] = useState("false");
  function reducerFn(state, action) {
    switch (action.type) {
      case "APIVIDEOSDATA":
        return { ...state, videosdata: action.payload };
      case "LOADINGSPINNER":
        return { ...state, isLoading: action.payload };
      case "CATEGORY":
        return { ...state, category: action.payload };
      case "SEARCHBAR":
        return { ...state, search: action.payload };
      case "Technology":
        return {
          ...state,
          category: {
            ...state["category"],
            Technology: !state.category.Technology,
          },
        };

      case "Coding":
        return {
          ...state,
          category: {
            ...state["category"],
            Coding: !state.category.Coding,
          },
        };

      case "Tedx":
        return {
          ...state,
          category: {
            ...state["category"],
            Tedx: !state.category.Tedx,
          },
        };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducerFn, {
    videosdata: [],
    isLoading: false,
    search: "",
    category: {
      Coding: false,
      Technology: false,
      Tedx: false,
    },
  });

  const { category, search, videosdata } = state;
  async function getVideos() {
    dispatch({ type: "LOADINGSPINNER", payload: true });
    try {
      await axios({
        method: "GET",
        url: `/api/videos/`,
      }).then((response) =>
        dispatch({
          type: "APIVIDEOSDATA",
          payload: response.data.videos,
        })
      );
      dispatch({ type: "LOADINGSPINNER", payload: false });
    } catch (error) {
      console.log(`something went wrong`, error);
    }
  }
  useEffect(() => {
    dispatch({ type: "LOADINGSPINNER", payload: true });
    getVideos();
  }, []);
  // categories filter
  const sortByCategoryFn = (videosdata, category) => {
    const sortedproductdata = [...videosdata];

    if (category.Technology) {
      return sortedproductdata.filter(
        (video) => video.category === "Technology"
      );
    }
    if (category.Coding) {
      return sortedproductdata.filter((video) => video.category === "Coding");
    }
    if (category.Tedx) {
      return sortedproductdata.filter((video) => video.category === "Tedx");
    }

    return sortedproductdata;
  };

  // search bar
  function sortyBySearchFn(videosdata, search) {
    const sortedproductdata = [...videosdata];
    if (search) {
      return sortedproductdata.filter((s) =>
        s.title.toLowerCase().includes(search)
      );
    } else {
      return sortedproductdata;
    }
  }

  const sortedData = sortByCategoryFn(videosdata, category);
  console.log(
    "🚀 ~ file: ExplorepageContext.js ~ line 110 ~ ExplorepageContext ~ sortedData",
    sortedData
  );

  const finalData = sortyBySearchFn(sortedData, search);

  return (
    <div>
      <explorePage.Provider
        value={{ state, dispatch, finalData, isActive, setActive }}
      >
        {children}
      </explorePage.Provider>
    </div>
  );
}

export default ExplorepageContext;
