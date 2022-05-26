import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSingleVideoContext } from "../Context/SingleVideopageContext";
import PlaylistModal from "../PlaylistModal/PlaylistModal";
import "./SingleVideo.css";

function SingleVideo() {
  const {
    videoData,
    setVideoId,
    likedVideo,
    dispatch,
    watchLaterVideo,
  } = useSingleVideoContext();
  const { _id } = useParams();
  setVideoId(_id);

  return (
    <div>
      <div className="single-video-card">
        <iframe
          id="IFRAME_ID"
          className="video__cards-iframe-videos"
          title=" videos"
          alt="videodata"
          src={videoData.videoUrl}
        ></iframe>
      </div>
      <div className="single-video-details">
        <img
          src={videoData.creator_pic}
          alt="crator_image"
          title="cratorspic"
          className="single-videopage-creatorpic"
        />
        <h2> {videoData.title}</h2>
        <div className="single-video-page-buttons">
          <span
            class="material-icons singlevideomi"
            onClick={() => likedVideo(videoData, dispatch)}
          >
            thumb_up
          </span>
          <span
            class="material-icons singlevideomi"
            onClick={() => watchLaterVideo(videoData, dispatch)}
          >
            watch_later
          </span>
          <span
            class="material-icons singlevideomi"
            onClick={() => dispatch({ type: "MODALSTATE", payload: "block" })}
          >
            playlist_add
          </span>
          <span class="material-icons singlevideomi">create</span>
        </div>
      </div>
      <PlaylistModal />
    </div>
  );
}

export default SingleVideo;
