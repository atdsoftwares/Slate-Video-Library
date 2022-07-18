import { getVideos } from "../Services/ExplorePageServices.js";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "../Utils/CustomUtils.js";

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
      case "HTML":
        return {
          ...state,
          category: {
            ...state["category"],
            HTML: !state.category.HTML,
          },
        };

      case "CSS":
        return {
          ...state,
          category: {
            ...state["category"],
            CSS: !state.category.CSS,
          },
        };

      case "JS":
        return {
          ...state,
          category: {
            ...state["category"],
            JS: !state.category.JS,
          },
        };
      case "React":
        return {
          ...state,
          category: {
            ...state["category"],
            React: !state.category.React,
          },
        };
      case "Others":
        return {
          ...state,
          category: {
            ...state["category"],
            Others: !state.category.Others,
          },
        };
      case "All": {
        return {
          ...state,
          category: {
            ...state["category"],
            HTML: false,
            CSS: false,
            JS: false,
            React: false,
            Others: false,
          },
        };
      }
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducerFn, {
    videosdata: [],
    isLoading: false,
    search: "",
    category: {
      HTML: false,
      CSS: false,
      JS: false,
      React: false,
      Others: false,
      All: false,
    },
  });

  const { category, search, videosdata } = state;

  useEffect(() => {
    dispatch({ type: "LOADINGSPINNER", payload: true });
    getVideos(dispatch);
  }, []);
  // categories filter
  const sortByCategoryFn = (videosdata, category) => {
    const sortedproductdata = [...videosdata];

    if (category.HTML) {
      return sortedproductdata.filter((video) => video.category === "HTML");
    }
    if (category.CSS) {
      return sortedproductdata.filter((video) => video.category === "CSS");
    }
    if (category.JS) {
      return sortedproductdata.filter((video) => video.category === "JS");
    }
    if (category.React) {
      return sortedproductdata.filter((video) => video.category === "React");
    }
    if (category.Others) {
      return sortedproductdata.filter((video) => video.category === "Others");
    }
    if (category === "") {
      return sortedproductdata.filter(
        (video) => video.category === "HTML" && "CSS" && "JS" && "Others"
      );
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
  const finalData = sortyBySearchFn(sortedData, search);

  return (
    <div>
      <explorePage.Provider
        value={{ state, dispatch, finalData, isActive, setActive, videosdata }}
      >
        {children}
      </explorePage.Provider>
    </div>
  );
}

export default ExplorepageContext;
