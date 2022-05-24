import React from "react";
import "./Header.css";
function Header() {
  return (
    <div>
      <nav class="navigation-menu">
        <div class="navigation__left">
          <div class="navigation__logo">Agri UI</div>
        </div>
        <input
          type="search"
          class="navigation__input"
          placeholder="search item"
        />
        <div class="navigation__right">
          <button className="btn btn-danger">Login </button>
          <span class="material-icons navigationmi"> account_circle</span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
