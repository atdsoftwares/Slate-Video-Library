import React from "react";
import Chips from "../../Components/Chips/Chips";
import { useExplorePageContext } from "../../Components/Context/ExplorepageContext";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Spinner from "../../Components/LaodingSpinner/Spinner";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Videocard from "../../Components/Video-Card/Videocard";
import "./Explorepage.css";
function Explorepage() {
  const { state, finalData } = useExplorePageContext();
  const { isLoading } = state;

  return (
    <div>
      <Header />
      <Sidebar />
      <Chips />
      <div className="explorepage-videos-style">
        {isLoading ? (
          <Spinner />
        ) : (
          finalData.map((video) => {
            return <Videocard key={video._id} video={video} />;
          })
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Explorepage;
