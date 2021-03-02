import React from "react";

const Bookings = ({ Booking, See, Book, Check }) => {
  return (
    <React.Fragment>
      <div className="booking">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Booking} alt="booking" className="img-fluid boook" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Booking Online Is As Easy As 1,2,3</h5>
                <div className="booking-contents">
                  <img src={Check} alt="booking" className="img-fluid" />
                  <h6 className="items"> Select Your Item(s)</h6>
                </div>
                <div className="booking-contents">
                  <img src={See} alt="booking" className="img-fluid" />
                  <h6 className="items">Check Live Availability</h6>
                </div>
                <div className="booking-contents">
                  <img src={Book} alt="booking" className="img-fluid" />
                  <h6 className="items">Book & Pay Online</h6>
                </div>
                <p class="card-text">
                  Seat back and relax and let us do the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bookings;
