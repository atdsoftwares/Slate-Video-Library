import { Link } from "../../Utils/CustomUtils";
import {
  useHistoryContext,
  useSingleVideoContext,
} from "../../Context/IndexAllContext";

import "./Videocard.css";
import { addToHistoryFn } from "../../Services/HistoryPageServices";
function Videocard({ video }) {
  const { _id, title, videoUrl, creator_pic } = video;
  const { setHistoryFn } = useHistoryContext();
  const { videoData } = useSingleVideoContext();

  return (
    <div>
      <div className="video__cards">
        <div class="card-wrapper video-card">
          <div>
            <embed class="iframe-video" src={videoUrl} title="video"></embed>
          </div>
          <Link to={`/explore/${_id}`}>
            <div className="video__cards-details">
              <div className="video__cards-image">
                <img src={creator_pic} alt="images" className="" />
              </div>
              <div
                className="video__cards-title"
                onClick={() => addToHistoryFn(videoData, setHistoryFn)}
              >
                <h3>{title} </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Videocard;
