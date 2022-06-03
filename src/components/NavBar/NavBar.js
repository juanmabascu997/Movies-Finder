import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function NavBar() {
  return (
    <header id="navbar">
        <div id="menu">
          <NavLink id="navs" exact to="/">
            Home
          </NavLink>
        </div>
        <div id="title">
            <p>Movie Finder <span className="material-icons md-24">monochrome_photos</span></p>
        </div>
        <div id="menu">
          <NavLink id="navs" to="/favs">
            Favorites
          </NavLink>
        </div>
    </header>
  );
}
