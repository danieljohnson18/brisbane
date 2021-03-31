import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link class="navbar-brand branding" to="/"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav d-flex">
              <Link className="nav-item nav-link" to="/jumpingcastle">
                Jumping Castles
              </Link>
              <Link className="nav-item nav-link" to="/funfood">
                Fun Foods
              </Link>
              <Link className="nav-item nav-link" to="/wedding">
                Party Hire
              </Link>
              <Link className="nav-item nav-link" to="/faq">
                FAQ
              </Link>
              <Link className="nav-item nav-link" to="/contact">
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

<ul className="navbar-nav d-flex">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">
      Jumping Castles
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">
      Fun Foods
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">
      Party Hire
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">
      FAQ
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">
      Contact
    </a>
  </li>
</ul>;
