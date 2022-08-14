import { axios, toast } from "../Utils/CustomUtils";

// add video to watchlater page
export const addToWatchLaterVideosFn = async (videoData, setWatchLaterFn) => {
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
    toast.success("Video added to Watch Later!");
  } catch (error) {
    console.log(error);
    toast.error("login first");
  }
};

export const getWatchLaterVideosFn = async (setWatchLaterFn) => {
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

export const removeWatchLaterVideosFn = async (_id, setWatchLaterFn) => {
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
    toast.success("Video removed from Watch Later!");
  } catch (error) {
    console.log(error);
  }
};
