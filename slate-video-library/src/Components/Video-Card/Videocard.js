import React from "react";

import "./Videocard.css";
function Videocard({ video }) {
  const { _id, title, videoUrl, creator_pic } = video;
  console.log(video);
  return (
    <div>
      <div className="video__cards">
        <iframe
          className="video__cards-iframe-videos"
          title=" videos"
          alt="videodata"
          src={videoUrl}
        ></iframe>
        <div className="video__cards-details">
          <div className="video__cards-image">
            <img src={creator_pic} alt="images" className="" />
          </div>
          <div className="video__cards-title">
            <h3>{title} </h3>
          </div>
          <button className="btn btn-warning">
            <span class="material-icons">play_arrow</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Videocard;
