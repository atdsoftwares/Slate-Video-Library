import React, { useState } from "react";
import { useNotesAppContext } from "../Context/NotesAppContext";
import { useSingleVideoContext } from "../Context/SingleVideopageContext";
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
      <input
        type="text"
        className="notes-app"
        value={inputNotesTextValue}
        onChange={(e) => setinputNotesTextValue(e.target.value)}
      />
      <button class="btn btn-warning-outline" onClick={saveNotesFn}>
        save
      </button>
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
