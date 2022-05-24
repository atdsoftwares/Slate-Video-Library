import React from "react";
import Videocard from "../Video-Card/Videocard";

import "./Sidebar.css";
function Sidebar() {
  return (
    <div>
      <aside className="aside">
        <div className="home">
          <span className="material-icons sidebarmi" title="Home">
            home
          </span>
          Home
        </div>

        <div className="explore">
          <span className="material-icons sidebarmi" title="Explore">
            explore
          </span>
          Explore
        </div>
        <div className="playlists">
          <span className="material-icons sidebarmi" title="Playlists">
            queue
          </span>
          Playlists
        </div>

        <div className="likes">
          <span className="material-icons sidebarmi" title="Liked Video">
            thumb_up
          </span>
          Likes
        </div>

        <div className="watchlater">
          <span className="material-icons sidebarmi" title="History">
            watch_later
          </span>
          Watch Later
        </div>
        <div className="history">
          <span className="material-icons sidebarmi" title="History">
            history
          </span>
          History
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
