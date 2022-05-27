import React, { useEffect } from "react";
import { useHistoryContext } from "../../Components/Context/HistorypageContext";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SmallVideoCards from "../../Components/SmallVideoCards/SmallVideoCards";
import "./Historypage.css";
function Historypage() {
  const {
    getHistoryFn,
    getHistory,
    removeVideoFromHistoryFn,
    removeAllHistoryFn,
  } = useHistoryContext();

  useEffect(() => {
    getHistoryFn();
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />

      <div className="watchlater-container">
        <button
          className="btn btn-warning clearallhistory"
          onClick={removeAllHistoryFn}
        >
          {" "}
          clear history
        </button>
        {getHistory.map((history) => (
          <div className="watchlaterdata">
            <SmallVideoCards props={history.videoUrl} />
            <span
              className="material-icons watchlatermi"
              onClick={(_id) => removeVideoFromHistoryFn(history._id)}
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

export default Historypage;
