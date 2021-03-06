import React from "react";
import Nav from "../Nav/Nav";
import "../Marquees/Marquees.css";
import Party from "../../assets/img/Wedding party hire.JPG";
import Touch from "../Touch/Touch";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Wedding = () => {
  return (
    <React.Fragment>
      <div className="wedding">
        <Nav />
      </div>
      <div class="container-fluid">
        <div className="paginator">
          <Link className="link" to="/wedding">
            <div className="text-start">
              <h2 className="headies">Party-Hire for weddings</h2>
            </div>
          </Link>
          <Link className="link" to="/marquees">
            <div className="text-start ml-2">
              <h2 className="headies">Marquees and Shade</h2>
            </div>
          </Link>
        </div>
        <div className="text-center">
          <h1 className="party-text">Party Hire For Weddings</h1>
        </div>
        <div className="party-image">
          <img src={Party} class="img-fluid" alt="Party" />
        </div>
        <div className="wed-text">
          <div className="text-start">
            <p>
              Backyard wedding, park wedding, church wedding or wherever! Our
              high quality wedding hire equipment can help you create the love
              story you've always dreamed of.
            </p>
            <p>
              We have a full range of wedding hire equipment including
              commercial marquees with both white and clear fnishes, tables,
              chairs, glassware, fooring,linen, letter lights & more!
            </p>
            <p>
              Our experience means we can easily work with your venue manager or
              event planner and ensure eve ything is delivered (and installed)
              on time and to perfection. Get started with some ideas below!
            </p>
          </div>
        </div>
        <div class="row row-mar">
          <div class="col marq mr-5">
            <h1 className="browse">BROWSE WEDDING MARQUEES</h1>
          </div>
          <div class="col marq mr-5">
            <h1 className="browse">BROWSE WEDDING CHAIRS</h1>
          </div>
          <div class="col marq">
            <h1 className="browse">BROWSE WEDDING LIGHTING</h1>
          </div>
        </div>
      </div>
      <Touch />
      <Footer />
    </React.Fragment>
  );
};

export default Wedding;
