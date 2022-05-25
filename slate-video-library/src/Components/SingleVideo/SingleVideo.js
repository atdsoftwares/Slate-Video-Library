import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSingleVideoContext } from "../Context/SingleVideopageContext";
import "./SingleVideo.css";

function SingleVideo() {
  const { dispatch, videoData, setVideoId } = useSingleVideoContext();
  const { _id } = useParams();
  // dispatch({ type: "SINGLEVIDEID", payload: _id });
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
          <span class="material-icons singlevideomi">thumb_up</span>
          <span class="material-icons singlevideomi">playlist_add</span>
          <span class="material-icons singlevideomi">watch_later</span>
          <span class="material-icons singlevideomi">create</span>
        </div>
      </div>
    </div>
  );
}

export default SingleVideo;
