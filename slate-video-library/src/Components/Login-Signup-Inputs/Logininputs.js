import {
  useEffect,
  useState,
  Link,
  React,
  useNavigate,
} from "../../Utils/CustomUtils";

import { useLoginSignupContext } from "../../Context/IndexAllContext";
import { loginHandler } from "../../Services/LoginSignUpPageServices";
import "./Logininputs.css";
function Logininputs() {
  const { dispatch, email, password, name } = useLoginSignupContext();
  const navigate = useNavigate();
  function submitLoginData() {
    // e.preventDefault();
    loginHandler(email, password, dispatch);
    navigate("/accounts");
  }

  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setError("");
      setIsDisabled(false);
    } else {
      setError("All fields must be filled.");
      setIsDisabled(true);
    }
  }, [email, password]);

  function setGuestLoginData(e) {
    e.preventDefault();
    const email = "6prankur@gmail.com";
    const password = "12345678";
    const name = "Guest";
    dispatch({ type: "EMAIL", payload: email });
    dispatch({ type: "PASSWORD", payload: password });
    dispatch({ type: "NAME", payload: name });
  }
  return (
    <div>
      <div className="Login-Form">
        <h3 className="login-page-title"> Login Page</h3>
        <div class="form-control">
          <form onSubmit={submitLoginData}>
            <label for="name">Email*</label>{" "}
            <input
              class="input__field"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              required
              onChange={(e) =>
                dispatch({ type: "EMAIL", payload: e.target.value })
              }
            />
            <label for="name">Password*</label>{" "}
            <input
              class="input__field"
              type="password"
              value={password}
              name="input password"
              placeholder="Password"
              autoComplete="on"
              required
              minlength="6"
              onChange={(e) =>
                dispatch({ type: "PASSWORD", payload: e.target.value })
              }
            />
            <p>
              {" "}
              <kbd style={{ fontSize: "1.2rem", padding: "1rem" }}>
                * are important.
              </kbd>{" "}
            </p>
            <div class="btn-container">
              <label>
                <input
                  class="input__field"
                  type="submit"
                  name="input submit"
                  required
                  disabled={isDisabled}
                />
              </label>
              <label>
                <button class="btn-guest-login" onClick={setGuestLoginData}>
                  Guest Login
                </button>
              </label>
            </div>
            <span style={{ color: "red" }}>{error}</span>
          </form>
          <h4 className="login-instruction">
            Not a member ?
            <Link to="/signup" style={{ margin: "0.5rem" }}>
              {" "}
              Signup
            </Link>{" "}
            here
          </h4>
        </div>
      </div>
    </div>
  );
}
export default Logininputs;
