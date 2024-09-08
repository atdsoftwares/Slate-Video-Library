import React from "react";
import {
  Footer,
  Header,
  Sidebar,
  Signupinputs,
} from "../../Components/IndexAllComponents";

function Signuppage() {
  return (
    <div>
      <Header />
      <div
        className="signup-page-sidebar"
        style={{ display: "flex", marginLeft: "35rem" }}
      >
        <Sidebar />
        <Signupinputs />
      </div>
      <Footer />
    </div>
  );
}

export default Signuppage;
