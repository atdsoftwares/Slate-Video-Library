import React from "react";
import { useExplorePageContext } from "../../Components/Context/ExplorepageContext";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Videocard from "../../Components/Video-Card/Videocard";
import "./Explorepage.css";
function Explorepage() {
  const { state } = useExplorePageContext();
  const { videosdata } = state;
  console.log(`videodata`, videosdata);
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="explorepage-videos-style">
        {videosdata.map((video) => (
          <Videocard key={video._id} video={video} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Explorepage;
