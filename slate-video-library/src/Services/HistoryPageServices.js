import { axios, toast } from "../Utils/CustomUtils";

export const addToHistoryFn = async (videoData, setHistoryFn) => {
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
    toast.error(
      `You could see this video but it can't be addded into History until logged in!`
    );
  }
};

export const getHistoryFn = async (setHistoryFn) => {
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

export const removeAllHistoryFn = async (setHistoryFn) => {
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
    toast.success("All videos removed from History successfully");
  } catch (error) {
    console.log(error);
  }
};

export const removeVideoFromHistoryFn = async (_id, setHistoryFn) => {
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
    toast.success("Video removed from History successfully");
  } catch (error) {
    console.log(error);
  }
};
