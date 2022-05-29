import React, { createContext, useContext, useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
const notesContext = createContext();
export const useNotesAppContext = () => useContext(notesContext);

function NotesAppContext({ children }) {
  const [inputNotesTextValue, setinputNotesTextValue] = useState("");
  const [inputNotesData, setinputNotesData] = useState([]);

  function saveNotesFn(e) {
    e.preventDefault();

    const inputNotesData1 = [
      ...inputNotesData,
      { _id: uuid(), inputNotesTextValue },
    ];
    setinputNotesData(inputNotesData1);
    setinputNotesTextValue("");
  }

  function deleteNotesFn(_id) {
    const inputNotesData1 = inputNotesData.filter((f) => f._id !== _id);
    setinputNotesData(inputNotesData1);
  }

  function editNotesFn(_id) {
    const inputNotesData1 = inputNotesData.find((f) => {
      return f._id === _id;
    });
    setinputNotesTextValue(inputNotesData1.inputNotesTextValue);
  }

  console.log(inputNotesData);
  return (
    <div>
      <notesContext.Provider
        value={{
          inputNotesData,
          inputNotesTextValue,
          saveNotesFn,
          setinputNotesTextValue,
          deleteNotesFn,
          editNotesFn,
        }}
      >
        {children}
      </notesContext.Provider>
    </div>
  );
}

export default NotesAppContext;
