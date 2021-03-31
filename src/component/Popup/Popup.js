import React from "react";
import Nav from "../Nav/Nav";
import Touch from "../Touch/Touch";
import Party from "../../assets/img/Wedding party hire.JPG";
import "../Popup/Popup.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Popup = () => {
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
          {/*<Link className="link" to="/marquees">
            <div className="text-start ml-2">
              <h2 className="headies">Marquees and Shade</h2>
            </div>
  </Link>*/}
        </div>

        <div class="card mb-3 pops-card">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Party} alt="..." className="pops-image" />
            </div>
            <div class="col-md-8 ">
              <div class="card-body">
                <h5 class="card-title">Marquee Ե DIY Pop Up Ե 3m X 3m</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <h4 className="pops-items">
                  Strength <span className="classified">Yes</span>
                </h4>
                <h4 className="pops-items">
                  Height <span className="classified">Yes</span>
                </h4>
                <h4 className="pops-items">
                  Clearance <span className="classified">Yes</span>
                </h4>
                <h4 className="pops-items">
                  Main profile size <span className="classified">Yes</span>
                </h4>
                <h4 className="pops-items">
                  Material <span className="classified">Yes</span>
                </h4>
                <h4 className="pops-items">
                  Push button system <span className="classified">Yes</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/*<div className="party-image">
          <img src={Party} class="img-fluid" alt="Party" />
</div>*/}
        {/*<div className="wed-text">
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
        </div>*/}
      </div>
      <Touch />
      <Footer />
    </React.Fragment>
  );
};

export default Popup;
