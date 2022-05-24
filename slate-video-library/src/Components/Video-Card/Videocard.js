import React from "react";
import "./Videocard.css";
function Videocard() {
  return (
    <div>
      <div className="video__cards">
        <iframe
          className="video__cards-iframe-videos"
          title=" videos"
          alt="videodata"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
        <div className="video__cards-details">
          <div className="video__cards-image">
            <img src="/" alt="images" className="" /> channel title
          </div>
          <div className="video__cards-title">
            <h2>title </h2>
          </div>
        </div>
        <button className="btn btn-warning"> watch now </button>
      </div>
    </div>
  );
}

export default Videocard;
