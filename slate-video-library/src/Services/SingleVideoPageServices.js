import { axios, toast } from "../Utils/CustomUtils";

export async function getSingleVideosFn(videoId, dispatch) {
  try {
    await axios.get(`/api/video/${videoId}`).then((response) =>
      dispatch({
        type: "SINGLEVIDEODATA",
        payload: response.data.video,
      })
    );
    toast.success("Retrieving Video Data");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}
