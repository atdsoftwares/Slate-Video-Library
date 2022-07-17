import { React, useNavigate } from "../../Utils/CustomUtils";
import {
  useLoginSignupContext,
  useNotesAppContext,
} from "../../Context/IndexAllContext";
import { logoutHandler } from "../../Services/LoginSignUpPageServices";

import "./Accountdetails.css";
function Accountdetails() {
  const { loginData } = useLoginSignupContext();
  const { _id, email, name, number } = loginData;
  const { inputNotesData, deleteNotesFn, editNotesFn } = useNotesAppContext();
  const navigate = useNavigate();
  function logOutUserFromApp() {
    logoutHandler();
    navigate("/");
  }

  return (
    <div>
      <h1>Account Details </h1>
      <table className="table">
        <tr>
          <th>_id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Watchlater</th>
          <th>Playlists</th>
          <th>Notes</th>
          <th>LogOut</th>
        </tr>
        <tr>
          <td>{_id}</td>
          <td>{name}</td>
          <td> {email}</td>
          <td>{number}</td>
          <td>0</td>
          <td>0</td>
          <td>{inputNotesData.length}</td>
          <td>
            <button className="btn btn-primary" onClick={logOutUserFromApp}>
              Logout
            </button>
          </td>
        </tr>
      </table>
      <h3 className="h3"> Notes </h3>

      <table className="table2">
        <tr>
          <th> Notes Id</th>
          <th> Notes Title</th>
          <th> Action Button</th>
        </tr>

        {inputNotesData.map((notes) => (
          <tr>
            <td>{notes._id}</td>
            <td>{notes.inputNotesTextValue}</td>
            <td>
              <div className="btn-action-notes">
                <span
                  className="material-icons"
                  onClick={(_id) => deleteNotesFn(notes._id)}
                  style={{ cursor: "pointer" }}
                >
                  delete
                </span>
                <span className="material-icons">edit</span>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Accountdetails;
