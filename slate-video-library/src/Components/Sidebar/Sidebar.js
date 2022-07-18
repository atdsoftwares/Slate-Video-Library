import { NavLink as Link, React } from "react-router-dom";

import "./Sidebar.css";
function Sidebar() {
  return (
    <div>
      <aside className="aside">
        <Link to="/">
          <div className="home">
            <span className="material-icons sidebarmi" title="Home">
              home
            </span>
            Home
          </div>
        </Link>

        <Link to="/explore">
          <div className="explore">
            <span className="material-icons sidebarmi" title="Explore">
              explore
            </span>{" "}
            Explore
          </div>
        </Link>
        <Link to="/playlists">
          <div className="playlists">
            <span className="material-icons sidebarmi" title="Playlists">
              queue
            </span>{" "}
            Playlists
          </div>
        </Link>

        <Link to="/likes">
          <div className="likes">
            <span className="material-icons sidebarmi" title="Liked Video">
              thumb_up
            </span>{" "}
            Likes
          </div>
        </Link>

        <Link to="/watchlater">
          <div className="watchlater">
            <span className="material-icons sidebarmi" title="History">
              watch_later
            </span>{" "}
            Watch Later
          </div>
        </Link>
        <Link to="/history">
          <div className="history">
            <span className="material-icons sidebarmi" title="History">
              history
            </span>{" "}
            History
          </div>
        </Link>
      </aside>
    </div>
  );
}

export default Sidebar;
