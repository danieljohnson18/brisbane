import React from "react";
import Marq1 from "../../assets/img/Marquee – DIY Pop Up – 3m x 3m.JPG";
import "../Modals/Modals.css";
import { Link } from "react-router-dom";

const Modals = () => {
  return (
    <div>
      <div className="cart-btn">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add to Cart
        </button>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4 popups">
                  <img src={Marq1} alt="..." className="modal-img" />
                </div>
                <div class="col-md-8 popup-content">
                  <div class="card-body">
                    <h5 class="card-title">Marquee Ե DIY Pop Up Ե 3m X 3m</h5>
                    <p class="card-text">
                      The main stay of any backyard party, spo̶ts event and
                      school fete, the humble marquee provides shelter, shade
                      and a tempora̶y house for the day!
                    </p>
                    <p class="card-text">
                      Our pop up marquees are commercial quality, easy to set up
                      for 1or 2 people and feature a heavy duty design far
                      supe̶ior to those cheap and nasty gazebos regularly hired
                      out.
                    </p>
                    <p class="card-text">
                      Our DIY hire pop up marquees feature a frame and roof over
                      50%stronger than regular competitors and a set up time of
                      under 5minutes!
                    </p>
                    <h4 className="items">
                      Strength <span className="classified">Yes</span>
                    </h4>
                    <h4 className="items">
                      Height <span className="classified">Yes</span>
                    </h4>
                    <h4 className="items">
                      Clearance <span className="classified">Yes</span>
                    </h4>
                    <h4 className="items">
                      Main profile size <span className="classified">Yes</span>
                    </h4>
                    <h4 className="items">
                      Material <span className="classified">Yes</span>
                    </h4>
                    <h4 className="items">
                      Push button system <span className="classified">Yes</span>
                    </h4>
                    <h4 className="items">
                      Colors<span className="classified">Yes</span>
                    </h4>
                    <h4 className="items">
                      Walls<span className="classified">Yes</span>
                    </h4>
                    <p class="card-text">
                      <Link className="link" to="/popup">
                        <h4 className="details">View Details</h4>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*<div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
  </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
