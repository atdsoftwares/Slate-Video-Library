import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SingleVideo from "../../Components/SingleVideo/SingleVideo";

function SingleVideopage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <SingleVideo />
      <Footer />
    </div>
  );
}

export default SingleVideopage;
