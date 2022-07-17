import React from "react";
import {
  Footer,
  Header,
  Sidebar,
  SingleVideo,
} from "../../Components/IndexAllComponents";

import "./SingleVideopage.css";

function SingleVideopage() {
  return (
    <div>
      <Header />
      <div className="sidebar-single-video">
        <Sidebar />
        <SingleVideo />
      </div>
      <Footer />
    </div>
  );
}

export default SingleVideopage;
