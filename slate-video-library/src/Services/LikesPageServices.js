import { axios, toast } from "../Utils/CustomUtils";
// add video to watchlater page
export const addToLikesFn = async (videoData, setLikesFn) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/user/likes`,
      headers: { authorization: localStorage.getItem("token") },
      data: { video: videoData },
    });
    setLikesFn({ type: "ADD_TO_LIKES", payload: response.data.likes });
    toast.success("Video added to Likes successfully");
  } catch (error) {
    console.log(error);
  }
};

export const getLikedVideosFn = async (setLikesFn) => {
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

export const removeLikedVideosFn = async (_id, setLikesFn) => {
  try {
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
    toast.success("Video removed from Likes successfully");
  } catch (error) {
    console.log(error);
  }
};
