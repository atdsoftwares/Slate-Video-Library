import React from "react";
import { useExplorePageContext } from "../Context/ExplorepageContext";
import "./Chips.css";
function Chips() {
  const { dispatch, state, isActive } = useExplorePageContext();
  const { rating, search, stock } = state;

  return (
    <div className="chips-container">
      <input
        type="submit"
        // className="chips"
        className={isActive ? "chips2" : "chips"}
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
  );
}

export default Chips;
