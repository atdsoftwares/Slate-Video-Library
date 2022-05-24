import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Videocard from "../../Components/Video-Card/Videocard";
import "./Homepage.css";
function Homepage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Videocard />
      <Footer />
    </div>
  );
}

export default Homepage;
