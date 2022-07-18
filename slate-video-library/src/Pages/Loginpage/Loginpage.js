import React from "react";
import {
  Footer,
  Header,
  Logininputs,
  Sidebar,
} from "../../Components/IndexAllComponents";

import "./Loginpage.css";
function Loginpage() {
  return (
    <div>
      <Header />
      <div
        className="login-page-sidebar"
        style={{ display: "flex", marginLeft: "25rem" }}
      >
        <Sidebar />
        <Logininputs />
      </div>
      <Footer />
    </div>
  );
}

export default Loginpage;
