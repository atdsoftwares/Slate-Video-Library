import React from "react";
import { useParams } from "react-router-dom";
import { useSingleVideoContext } from "../Context/SingleVideopageContext";
import "./Singlevideo.css";
function Singlevideo() {
  const { setVideoId } = useSingleVideoContext();
  const { _id } = useParams();
  setVideoId(_id);
  return (
    <div>
      <div className="single-video-card">
        <iframe
          className="video__cards-iframe-videos"
          title=" videos"
          alt="videodata"
          //   src={videoUrl}
        ></iframe>
      </div>
      <div className="single-video-details">
        <img
          //   src={creator_pic}
          alt="crator_image"
          title="cratorspic"
          className="single-videopage-creatorpic"
        />
        <h2> title</h2>
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

export default Singlevideo;
