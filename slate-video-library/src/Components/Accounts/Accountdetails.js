import { React, useNavigate } from "../../Utils/CustomUtils";
import {
  useLoginSignupContext,
  useNotesAppContext,
  usePlaylistContext,
  useWatchLaterContext,
} from "../../Context/IndexAllContext";
import { logoutHandler } from "../../Services/LoginSignUpPageServices";

import "./Accountdetails.css";
function Accountdetails() {
  const { loginData } = useLoginSignupContext();
  const { addToPlaylists } = usePlaylistContext();
  const { getWatchLaterVideos } = useWatchLaterContext();
  const { email, name } = loginData;
  const { inputNotesData, deleteNotesFn } = useNotesAppContext();
  const navigate = useNavigate();
  function logOutUserFromApp() {
    window.location.reload();
    logoutHandler();
    navigate("/login");
  }

  return (
    <div>
      <h1>Account Details </h1>
      <table className="table">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Watchlater</th>
          <th>Playlists</th>
          <th>Notes</th>
          <th>LogOut</th>
        </tr>
        <tr>
          <td>{name}</td>
          <td> {email}</td>
          <td>{getWatchLaterVideos && getWatchLaterVideos.length}</td>
          <td>{addToPlaylists && addToPlaylists.length}</td>
          <td>{inputNotesData.length}</td>
          <td>
            <button className="btn btn-danger" onClick={logOutUserFromApp}>
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
          <th> Action</th>
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
                {/* <span className="material-icons">edit</span> */}
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Accountdetails;
