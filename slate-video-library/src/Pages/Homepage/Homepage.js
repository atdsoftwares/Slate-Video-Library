import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Videocard from "../../Components/Video-Card/Videocard";
import "./Homepage.css";
function Homepage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Hero />
      <Footer />
    </div>
  );
}

export default Homepage;
