import {
  Accountdetails,
  Footer,
  Header,
  Sidebar,
} from "../../Components/IndexAllComponents";

function Accountpage() {
  return (
    <div>
      <Header />
      <div
        className="account-page-sidebar"
        style={{ display: "flex", marginLeft: "25rem" }}
      >
        <Sidebar />
        <Accountdetails />
      </div>
      <Footer />
    </div>
  );
}

export default Accountpage;
