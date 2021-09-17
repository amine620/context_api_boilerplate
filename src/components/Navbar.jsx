import React, { useContext } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
         
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                dashboard<span className="sr-only">({avatar})</span>
              </Link>
            </li>
       
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  register
                </Link>
              </li>
          <li class="nav-item dropdown">
            <button class="dropdown-item" >
              logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
