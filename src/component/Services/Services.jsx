import React from "react";

const Services = ({ logo, Book, Business, Check, See, Sport, Backyard }) => {
  return (
    <div>
      <div className="services">
        <div class="container">
          <div class="row">
            <div class="col">
              <div className="content">
                <img src={Backyard} class="img-fluid" alt="..." />
                <h3 className="party">Backyard Parties</h3>
              </div>
            </div>
            <div class="col">
              <img src="..." class="img-fluid" alt="..." />
            </div>
            <div class="col">
              <img src={Business} class="img-fluid" alt="..." />
            </div>
            <div class="col">
              <img src={Sport} class="img-fluid" alt="..." />
            </div>
            <div class="col">
              <img src={Book} class="img-fluid" alt="..." />
            </div>
            <div class="col">
              <img src="..." class="img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
