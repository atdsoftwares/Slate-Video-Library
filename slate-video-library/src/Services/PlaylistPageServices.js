import { axios, toast } from "../Utils/CustomUtils";

// add a new playlist
export async function makePlaylistFn(setPlaylistFn, inputState) {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/user/playlists`,
      headers: { authorization: localStorage.getItem("token") },
      data: {
        playlist: { playlistName: inputState },
      },
    });

    setPlaylistFn({
      type: "ADD_PLAYLISTS",
      payload: response.data.playlists,
    });
    toast.success("Playlist created successfully");
  } catch (error) {
    console.log(error);
    toast.error("login first");
  }
}

// get playlist from DB which have been already added
export const getPlaylistsFn = async (setPlaylistFn) => {
  try {
    const response = await axios({
      method: "GET",
      url: `/api/user/playlists/`,
      headers: { authorization: localStorage.getItem("token") },
    });
    setPlaylistFn({
      type: "GET_PLAYLISTS",
      payload: response.data.playlists,
    });
  } catch (error) {
    console.log(`something went wrong`, error);
  }
};

// remove playlist from palylist page
export async function removePlaylistFn(_id, setPlaylistFn) {
  try {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/playlists/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
    });
    setPlaylistFn({
      type: "ADD_PLAYLISTS",
      payload: response.data.playlists,
    });
    toast.success("Playlist deleted successfully");
  } catch (error) {
    console.log(error);
  }
}

// add videos into playlists
export async function addVideosIntoPlaylistFn(_id, data, setPlaylistFn) {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/user/playlists/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: { video: data },
    });

    setPlaylistFn({
      type: "ADD_VIDEOS_TO_PLAYLISTS",
      payload: response.data.playlists,
    });
    toast.success(
      `Video added successfully to ${response.data.playlist.playlistName} playlist`
    );
  } catch (error) {
    console.log(error);
    toast.error("login first");
  }
}
// get videos from playlists
export async function getVideosFromPlaylistsFn(playlistId, setPlaylistFn) {
  try {
    const response = await axios({
      method: "GET",
      url: `/api/user/playlists/${playlistId}`,
      headers: { authorization: localStorage.getItem("token") },
    });
    setPlaylistFn({
      type: "GET_VIDEOS_FROM_PLAYLISTS",
      payload: response.data.playlist.videos,
    });
  } catch (error) {
    console.log(error);
  }
}

// delete videos inside playlist

export async function deleteVideosInsidePlaylistFn(
  playlistId,
  _id,
  setPlaylistFn
) {
  try {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/playlists/${playlistId._id}/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
    });
    setPlaylistFn({
      type: "GET_VIDEOS_FROM_PLAYLISTS",
      payload: response.data.playlist.videos,
    });
    toast.success("Video deleted successfully");
  } catch (error) {
    console.log(error);
  }
}
