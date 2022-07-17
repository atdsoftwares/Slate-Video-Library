import {
  Chips,
  Footer,
  Header,
  Sidebar,
  Spinner,
  Videocard,
} from "../../Components/IndexAllComponents";
import { useExplorePageContext } from "../../Context/IndexAllContext";
import "./Explorepage.css";
function Explorepage() {
  const { finalData, isLoading } = useExplorePageContext();

  return (
    <div>
      <Header />
      <div className="explorepage-data">
        <Sidebar />
        <Chips />
        <div className="explorepage-videos-style">
          {isLoading ? (
            <Spinner />
          ) : (
            finalData.map((video) => {
              return <Videocard key={video._id} video={video} />;
            })
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Explorepage;
