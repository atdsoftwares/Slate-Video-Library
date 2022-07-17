import { useExplorePageContext } from "../../Context/IndexAllContext";
import "./Chips.css";
function Chips() {
  const { dispatch, state } = useExplorePageContext();

  return (
    <div className="chips-container">
      <div className="chips-data">
        <input
          type="submit"
          className="chips"
          placeholder="Technology"
          value="All"
          onClick={() =>
            dispatch({
              type: "All",
            })
          }
        />
        <input
          type="submit"
          className="chips"
          placeholder="Technology"
          value="Technology"
          onClick={() =>
            dispatch({
              type: "Technology",
            })
          }
        />
        <input
          type="submit"
          className="chips"
          placeholder="Technology"
          value="Tedx"
          onClick={() =>
            dispatch({
              type: "Tedx",
            })
          }
        />
        <input
          type="submit"
          className="chips"
          placeholder="Technology"
          value="Coding"
          onClick={() =>
            dispatch({
              type: "Coding",
            })
          }
        />
      </div>
    </div>
  );
}

export default Chips;
