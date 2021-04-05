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
                <div class="card-days">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      No of days
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder=""
                    />
                  </div>
                  <div className="days-hire">
                    <label for="exampleFormControlInput1" class="form-label">
                      7 days Hire
                    </label>
                    <span className="funds">$112.50</span>
                  </div>
                </div>
                <hr className="seperate" />
                <div class="card-days">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Event Date
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder=""
                    />
                  </div>
                  <span className="days-hire">
                    <label for="exampleFormControlInput1" class="form-label">
                      Delivery
                    </label>

                    <div>
                      <input
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder=""
                      />
                    </div>
                  </span>
                </div>
                <div class="card-days">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Quantity
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder=""
                    />
                  </div>
                  <span className="funds">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label seven-days"
                    >
                      Marquee Wall Plain
                    </label>

                    <div className="multiple-labels">
                      <input
                        type="number"
                        class="form-control double"
                        id="exampleFormControlInput1"
                        placeholder=""
                      />
                      <input
                        type="number"
                        class="form-control double"
                        id="exampleFormControlInput1"
                        placeholder=""
                      />
                    </div>
                  </span>
                </div>
                <p class="card-text">
                  <Link>
                    <h4 className="quantity-update">UPDATE QUANTITY</h4>
                  </Link>
                </p>
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
