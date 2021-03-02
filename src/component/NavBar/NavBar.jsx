import React from "react";
import Bookings from "../Booking/Bookings";
import Footer from "../Footer/Footer";
import "../NavBar/NavBar.css";
import Products from "../Products/Products";
import Services from "../Services/Services";

const NavBar = ({
  logo,
  Book,
  Business,
  Check,
  See,
  Sport,
  Backyard,
  Booking,
  Medium,
  Glow,
  Water,
  Large,
  Obstacle,
  Table,
  Fencing,
  Chair,
  Community,
  Weddings,
  School,
}) => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <a class="navbar-brand branding" href="#"></a>
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

      <div className="container">
        <Services
          Weddings={Weddings}
          Business={Business}
          Sport={Sport}
          Backyard={Backyard}
          Community={Community}
          School={School}
        />
        <Products
          logo={logo}
          Medium={Medium}
          Glow={Glow}
          Water={Water}
          Large={Large}
          Obstacle={Obstacle}
          Table={Table}
          Fencing={Fencing}
          Chair={Chair}
        />
        <Bookings Booking={Booking} Check={Check} See={See} Book={Book} />
      </div>
      <div className="touch">
        <div className="container">
          <div className="row">
            <div className="col stay">
              <h2 className="stay-in"> Stay in touch</h2>
            </div>
          </div>
          <div class="row justify-content-md-center">
            <div class="col-md-auto">
              <h3 className="content">Join our mailing list</h3>
            </div>
            <div class="col col-lg-2">SUBSCRIBE</div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default NavBar;
