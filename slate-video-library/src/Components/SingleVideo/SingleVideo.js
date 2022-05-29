import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLikeContext } from "../Context/LikespageContext";
import { usePlaylistContext } from "../Context/PlaylistpageContext";
import { useSingleVideoContext } from "../Context/SingleVideopageContext";
import { useWatchLaterContext } from "../Context/WatchlaterpageContext";
import NoteTaking from "../Note Taking/NoteTaking";
import PlaylistModal from "../PlaylistModal/PlaylistModal";
import "./SingleVideo.css";

function SingleVideo() {
  const {
    videoData,
    setVideoId,
    dispatch,
    toggleNotesApp,
    togglePlaylistApp,
  } = useSingleVideoContext();
  const { addToWatchLaterVideosFn, setWatchLaterFn } = useWatchLaterContext();
  const { setLikesFn, addToLikesFn } = useLikeContext();

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
            onClick={() => addToLikesFn(videoData, setLikesFn)}
          >
            thumb_up
          </span>
          <span
            class="material-icons singlevideomi"
            onClick={() => addToWatchLaterVideosFn(videoData, setWatchLaterFn)}
          >
            watch_later
          </span>
          <span
            class="material-icons singlevideomi"
            onClick={togglePlaylistApp}
          >
            playlist_add
          </span>
          <span class="material-icons singlevideomi" onClick={toggleNotesApp}>
            create
          </span>
        </div>
      </div>
      <PlaylistModal />
      <NoteTaking />
    </div>
  );
}

export default SingleVideo;
