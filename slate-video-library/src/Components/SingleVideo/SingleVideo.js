import {
  useSingleVideoContext,
  useWatchLaterContext,
  useLikeContext,
} from "../../Context/IndexAllContext";
import { addToLikesFn } from "../../Services/LikesPageServices";
import { addToWatchLaterVideosFn } from "../../Services/WatchLaterServices";
import { useParams } from "../../Utils/CustomUtils";
import { ModalPlaylist, NoteTaking } from "../IndexAllComponents";
import "./SingleVideo.css";

function SingleVideo() {
  const { videoData, setVideoId, toggleNotesApp } = useSingleVideoContext();
  const { setWatchLaterFn } = useWatchLaterContext();
  const { setLikesFn } = useLikeContext();

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
        <div className="title-name-details">
          <h4> {videoData.title}</h4>
          <h4> {videoData.creator_name}</h4>
        </div>
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
          <span class="material-icons singlevideomi">
            <ModalPlaylist />
          </span>
          <span class="material-icons singlevideomi" onClick={toggleNotesApp}>
            create
          </span>
        </div>
      </div>

      <NoteTaking />
    </div>
  );
}

export default SingleVideo;
