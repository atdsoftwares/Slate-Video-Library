import React from "react";
import "./SmallVideoCards.css";
function SmallVideoCards({ props }) {
  return (
    <div>
      <iframe
        id="smallvidecard"
        src={props}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default SmallVideoCards;
