import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Singlevideo from "../../Components/Single-Video/Singlevideo";

function Singlevideopage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Singlevideo />
      <Footer />
    </div>
  );
}

export default Singlevideopage;
