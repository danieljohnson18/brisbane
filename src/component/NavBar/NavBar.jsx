import React from "react";
import "../NavBar/NavBar.css";
import Products from "../Products/Products";
import Services from "../Services/Services";

const NavBar = ({ logo, Book, Business, Check, See, Sport, Backyard }) => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <a class="navbar-brand" href="#">
                <img src={logo} alt="" width="30" height="24" />
              </a>
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
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="brisbane">
                  BRISBANE PARTY & EVENT HIRE..{" "}
                  <span className="easy">MADE EASY</span>
                </h1>
                <h2 className="castle">
                  Jumping Castle Hire | Party & Event Hire | Letter Light Hire
                </h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Services
        logo={logo}
        Book={Book}
        Business={Business}
        Check={Check}
        See={See}
        Sport={Sport}
        Backyard={Backyard}
      />
      <Products logo={logo} />

      <div className="container">
        <div className="booking">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={logo} alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Booking Online Is As Easy As 1,2,3</h5>
                  <h6 className="items">Select Your Item(s)</h6>
                  <h6 className="items">Check Live Availability</h6>
                  <h6 className="items">Book & Pay Online</h6>
                  <p class="card-text">
                    Seat back and relax and let us do the rest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
