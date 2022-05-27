import React from "react";
import { Link } from "react-router-dom";
import Videocard from "../Video-Card/Videocard";

import "./Sidebar.css";
function Sidebar() {
  return (
    <div>
      <aside className="aside">
        <div className="home">
          <Link to="/">
            <span className="material-icons sidebarmi" title="Home">
              home
            </span>
          </Link>
          Home
        </div>

        <div className="explore">
          <Link to="/explore">
            <span className="material-icons sidebarmi" title="Explore">
              explore
            </span>{" "}
          </Link>
          Explore
        </div>
        <div className="playlists">
          <Link to="/playlists">
            <span className="material-icons sidebarmi" title="Playlists">
              queue
            </span>{" "}
          </Link>
          Playlists
        </div>

        <div className="likes">
          <Link to="/likes">
            <span className="material-icons sidebarmi" title="Liked Video">
              thumb_up
            </span>{" "}
          </Link>
          Likes
        </div>

        <div className="watchlater">
          <Link to="/watchlater">
            <span className="material-icons sidebarmi" title="History">
              watch_later
            </span>{" "}
          </Link>
          Watch Later
        </div>
        <div className="history">
          <Link to="/history">
            <span className="material-icons sidebarmi" title="History">
              history
            </span>{" "}
          </Link>
          History
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
