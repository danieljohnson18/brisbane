import React from "react";
import "../TigerPart/TigerPart.css";

const TigerPart = () => {
  return (
    <div>
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

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
              <h5 class="modal-title tiger-header" id="exampleModalLabel">
                Tiger Part
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h4 className="tiger-body">
                {" "}
                Marquee - DIY Pop Up - 3m x 3m added to your Cart
                <br />, Complete your Order at your Cart after shoping.
              </h4>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TigerPart;
