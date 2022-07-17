import { useEffect } from "../../Utils/CustomUtils";
import {
  useExplorePageContext,
  useHistoryContext,
} from "../../Context/IndexAllContext";
import "./Historypage.css";
import {
  Footer,
  Header,
  Sidebar,
  SmallVideoCards,
} from "../../Components/IndexAllComponents";
import {
  getHistoryFn,
  removeAllHistoryFn,
  removeVideoFromHistoryFn,
} from "../../Services/HistoryPageServices";

function Historypage() {
  const { getHistory, setHistoryFn } = useHistoryContext();
  const { finalData } = useExplorePageContext();

  useEffect(() => {
    getHistoryFn(setHistoryFn);
  }, [finalData]);

  return (
    <div>
      <Header />
      <div
        className="likes-page-sidebar"
        style={{ display: "flex", marginLeft: "15rem" }}
      >
        <Sidebar />

        <div className="watchlater-container">
          <button
            className="btn btn-danger clearallhistory"
            onClick={() => removeAllHistoryFn(setHistoryFn)}
          >
            clear history
          </button>

          {getHistory.length <= 0 ? (
            <h3 className="historypage-title">
              {" "}
              THE HISTORY IS EMPTY , WATCH SOMETHING TO ADD HERE{" "}
            </h3>
          ) : (
            getHistory.map((history) => (
              <div className="watchlaterdata">
                <SmallVideoCards props={history.videoUrl} />
                <span
                  className="material-icons watchlatermi"
                  onClick={(_id) =>
                    removeVideoFromHistoryFn(history._id, setHistoryFn)
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

export default Historypage;
