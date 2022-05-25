import React from "react";
import { Link } from "react-router-dom";

import "./Videocard.css";
function Videocard({ video }) {
  const { _id, title, videoUrl, creator_pic } = video;

  return (
    <div>
      <div className="video__cards">
        <iframe
          className="video__cards-iframe-videos"
          title=" videos"
          alt="videodata"
          src={videoUrl}
        ></iframe>
        <Link to={`/explore/${_id}`}>
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
        </Link>
      </div>
    </div>
  );
}

export default Videocard;
