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
      <div class="form-data">
        <form onSubmit={saveNotesFn}>
          <input
            type="text"
            className="notes-app"
            value={inputNotesTextValue}
            onChange={(e) => setinputNotesTextValue(e.target.value)}
            required
            placeholder="take notes "
          />
          <input type="submit" class="submit-notes" />
        </form>
        <div>
          <div>
            <table>
              <tr>
                <th className="notes-data">Notes</th>
                <th>
                  <span class="notesmi">Action</span>
                  {/* <span class="material-icons notesmi">edit</span> */}
                </th>
              </tr>
              {inputNotesData.map((text) => (
                <tr>
                  <td className="notes-data"> {text.inputNotesTextValue} </td>
                  <td>
                    {/* <button className="btns">
                      <span
                        class="material-icons notesmi"
                        onClick={(_id) => editNotesFn(text._id)}
                      >
                        edit
                      </span>
                    </button> */}

                    <span
                      class="material-icons notesmi"
                      onClick={(_id) => deleteNotesFn(text._id)}
                    >
                      delete
                    </span>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteTaking;
