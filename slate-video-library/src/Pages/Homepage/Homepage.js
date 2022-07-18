import React from "react";
import {
  Footer,
  Header,
  Hero,
  Sidebar,
} from "../../Components/IndexAllComponents";

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
