import React from "react";
import Bookings from "../Booking/Bookings";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "../NavBar/NavBar.css";
import Products from "../Products/Products";
import Services from "../Services/Services";
import logo from "../../assets/img/Logo.svg";
import Book from "../../assets/img/Book-01.svg";
import Business from "../../assets/img/Business-01.svg";
import Check from "../../assets/img/Check live-01.svg";
import See from "../../assets/img/see-01.svg";
import Sport from "../../assets/img/Sport-01.svg";
import Backyard from "../../assets/img/Backyard party-01.svg";
import Booking from "../../assets/img/Bookings.jpg";
import Glow from "../../assets/img/GLOW.jpg";
import Water from "../../assets/img/INFLATABLE WATER.jpg";
import Large from "../../assets/img/LARGE COMBO.jpg";
import Obstacle from "../../assets/img/OBSTACLE cousre.jpg";
import Table from "../../assets/img/TABLES AND DRY.jpg";
import Medium from "../../assets/img/MEDIUM BOUNCY.jpg";
import Fencing from "../../assets/img/FENCING AND.jpg";
import Chair from "../../assets/img/CHAIRS AND.jpg";
import Weddings from "../../assets/img/Weddings-01.svg";
import School from "../../assets/img/School-01.svg";
import Community from "../../assets/img/Community-01.svg";
import Touch from "../Touch/Touch";

const NavBar = () => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="container-fluid">
          <Nav />
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
      <Touch />

      <Footer />
    </React.Fragment>
  );
};

export default NavBar;
