import React from "react";
import { useExplorePageContext } from "../../Context/IndexAllContext";
import "./Chips.css";
function Chips() {
  const { dispatch } = useExplorePageContext();

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
          value="HTML"
          onClick={() =>
            dispatch({
              type: "HTML",
            })
          }
        />

        <input
          type="submit"
          className="chips"
          placeholder="Technology"
          value="CSS"
          onClick={() =>
            dispatch({
              type: "CSS",
            })
          }
        />
        <input
          type="submit"
          className="chips"
          placeholder="Technology"
          value="JS"
          onClick={() =>
            dispatch({
              type: "JS",
            })
          }
        />
        <input
          type="submit"
          className="chips"
          placeholder="Technology"
          value="React"
          onClick={() =>
            dispatch({
              type: "React",
            })
          }
        />
        <input
          type="submit"
          className="chips"
          placeholder="Technology"
          value="Others"
          onClick={() =>
            dispatch({
              type: "Others",
            })
          }
        />
      </div>
    </div>
  );
}

export default Chips;
