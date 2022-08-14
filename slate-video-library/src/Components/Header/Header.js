import { Link, React } from "react-router-dom";
import { useExplorePageContext } from "../../Context/IndexAllContext";
import "./Header.css";
function Header() {
  const { dispatch } = useExplorePageContext();
  const token = localStorage.getItem("token");
  return (
    <div>
      <nav class="navigation-menu">
        <div class="navigation__left">
          <Link to="/">
            <div class="navigation__logo">
              <img
                src="https://img.icons8.com/parakeet/48/000000/experimental-internet-parakeet.png"
                alt="logo"
              />{" "}
              Slate-Videos
            </div>
          </Link>
        </div>
        <input
          type="search"
          class="navigation__input"
          placeholder="search item"
          onChange={(e) =>
            dispatch({ type: "SEARCHBAR", payload: e.target.value })
          }
        />
        <div class="navigation__right">
          {!token ? (
            <Link to="/login">
              <span class="material-icons navigationmi">login</span>
            </Link>
          ) : (
            <Link to="/accounts">
              <span class="material-icons navigationmi">account_circle</span>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
