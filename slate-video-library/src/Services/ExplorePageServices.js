import { axios, toast } from "../Utils/CustomUtils";

export async function getVideos(dispatch) {
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
    toast.success("Retrieving Data");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}
