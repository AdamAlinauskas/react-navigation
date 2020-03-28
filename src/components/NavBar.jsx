import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Movies
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );

    // return (
    //   <div>
    //     <NavLink exact to="/">
    //       Home
    //     </NavLink>{" "}
    //     | <NavLink to="/movies">Movies</NavLink> | &nbsp; |{" "}
    //     <NavLink to="/about">About</NavLink> | &nbsp;
    //     <NavLink to="/contact">Contact</NavLink>
    //   </div>
    // );
  }
}

export default NavBar;
