import React from "react";
import {
  useNotesAppContext,
  useSingleVideoContext,
} from "../../Context/IndexAllContext";

import "./NoteTaking.css";
function NoteTaking() {
  const { notesTakingBoxState } = useSingleVideoContext();

  const {
    inputNotesTextValue,
    setinputNotesTextValue,
    saveNotesFn,
    inputNotesData,
    deleteNotesFn,
    editNotesFn,
    buttonState,
  } = useNotesAppContext();

  return (
    <div
      className="notes-container"
      style={{
        display: notesTakingBoxState,
      }}
    >
      <form onSubmit={saveNotesFn}>
        <input
          type="text"
          className="notes-app"
          value={inputNotesTextValue}
          onChange={(e) => setinputNotesTextValue(e.target.value)}
          required
          placeholder="take notes "
        />
        <input type="submit" class="submit" />
      </form>
      <div>
        <div>
          <table>
            <tr>
              <th className="notes-data">Notes</th>
              <th>Actions</th>
            </tr>
            {inputNotesData.map((text) => (
              <tr>
                <td className="notes-data"> {text.inputNotesTextValue} </td>
                <td>
                  <button className="btns">
                    <span
                      class="material-icons notesmi"
                      onClick={(_id) => editNotesFn(text._id)}
                    >
                      edit
                    </span>
                  </button>
                  <button className="btns">
                    <span
                      class="material-icons notesmi"
                      onClick={(_id) => deleteNotesFn(text._id)}
                    >
                      delete
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default NoteTaking;
