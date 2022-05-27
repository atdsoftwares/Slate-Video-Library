import React, { useEffect } from "react";
import { useSingleVideoContext } from "../../Components/Context/SingleVideopageContext";
import { useWatchLaterContext } from "../../Components/Context/WatchlaterpageContext";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SmallVideoCards from "../../Components/SmallVideoCards/SmallVideoCards";
import "./Watchlaterpage.css";
function Watchlaterpage() {
  const {
    getWatchLaterVideos,
    getWatchLaterVideosFn,
    removeWatchLaterVideosFn,
  } = useWatchLaterContext();

  useEffect(() => {
    getWatchLaterVideosFn();
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="watchlater-container">
        {getWatchLaterVideos.map((watch_later) => (
          <div className="watchlaterdata">
            <SmallVideoCards props={watch_later.videoUrl} />
            <span
              className="material-icons watchlatermi"
              onClick={(_id) => removeWatchLaterVideosFn(watch_later._id)}
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

export default Watchlaterpage;
