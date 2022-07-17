import { useEffect } from "../../Utils/CustomUtils";
import { useWatchLaterContext } from "../../Context/IndexAllContext";
import "./Watchlaterpage.css";
import {
  Footer,
  Header,
  Sidebar,
  SmallVideoCards,
} from "../../Components/IndexAllComponents";
import {
  getWatchLaterVideosFn,
  removeWatchLaterVideosFn,
} from "../../Services/WatchLaterServices";
function Watchlaterpage() {
  const { getWatchLaterVideos, setWatchLaterFn } = useWatchLaterContext();

  useEffect(() => {
    getWatchLaterVideosFn(setWatchLaterFn);
  }, []);

  return (
    <div>
      <Header />
      <div
        className="likes-page-sidebar"
        style={{ display: "flex", marginLeft: "15rem" }}
      >
        <Sidebar />
        <div className="watchlater-container">
          {getWatchLaterVideos.length <= 0 ? (
            <h3 className="watchlaterpage-title">
              THERE ARE NO WATCHLATER VIDEOS{" "}
            </h3>
          ) : (
            getWatchLaterVideos.map((watch_later) => (
              <div className="watchlaterdata">
                <SmallVideoCards props={watch_later.videoUrl} />
                <span
                  className="material-icons watchlatermi"
                  onClick={(_id) =>
                    removeWatchLaterVideosFn(watch_later._id, setWatchLaterFn)
                  }
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

export default Watchlaterpage;
