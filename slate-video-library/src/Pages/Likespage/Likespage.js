import React, { useEffect } from "react";
import {
  Footer,
  Header,
  Sidebar,
  SmallVideoCards,
} from "../../Components/IndexAllComponents";
import { useLikeContext } from "../../Context/IndexAllContext";
import {
  getLikedVideosFn,
  removeLikedVideosFn,
} from "../../Services/LikesPageServices";

import "./Likespage.css";
function Likespage() {
  const { getLikedVideos, setLikesFn } = useLikeContext();

  useEffect(() => {
    getLikedVideosFn(setLikesFn);
  }, []);

  return (
    <div>
      <Header />
      <div
        className="likes-page-sidebar"
        style={{ display: "flex", marginLeft: "15rem" }}
      >
        <Sidebar />
        <div className="likes-container">
          {getLikedVideos.length <= 0 ? (
            <h3 className="historypage-title">THERE ARE NO LIKED VIDEOS </h3>
          ) : (
            getLikedVideos.map((like) => (
              <div className="likesdata">
                <SmallVideoCards props={like.videoUrl} />
                <span
                  className="material-icons likesmi"
                  onClick={(_id) => removeLikedVideosFn(like._id, setLikesFn)}
                >
                  delete
                </span>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Likespage;
