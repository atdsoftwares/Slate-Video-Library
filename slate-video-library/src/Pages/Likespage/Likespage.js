import React, { useEffect } from "react";
import { useLikeContext } from "../../Components/Context/LikespageContext";
import { useSingleVideoContext } from "../../Components/Context/SingleVideopageContext";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SmallVideoCards from "../../Components/SmallVideoCards/SmallVideoCards";
import "./Likespage.css";
function Likespage() {
  const {
    removeLikedVideosFn,
    getLikedVideosFn,
    getLikedVideos,
  } = useLikeContext();

  useEffect(() => {
    getLikedVideosFn();
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="likes-container">
        {getLikedVideos.map((like) => (
          <div className="likesdata">
            <SmallVideoCards props={like.videoUrl} />
            <span
              className="material-icons likesmi"
              onClick={(_id) => removeLikedVideosFn(like._id)}
            >
              delete
            </span>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Likespage;
