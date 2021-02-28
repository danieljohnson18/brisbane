import React from "react";

const Services = ({
  Business,
  Sport,
  Backyard,
  School,
  Weddings,
  Community,
}) => {
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
              <div className="content">
                <img src={Weddings} class="img-fluid" alt="..." />
                <h3 className="party">Weddings</h3>
              </div>
            </div>
            <div class="col">
              <div className="content">
                <img src={Business} class="img-fluid" alt="..." />
                <h3 className="party">Business/ Corporate</h3>
              </div>
            </div>
            <div class="col">
              <div className="content">
                <img src={Sport} class="img-fluid" alt="..." />
                <h3 className="party">Sporting Clubs</h3>
              </div>
            </div>
            <div class="col">
              <div className="content">
                <img src={School} class="img-fluid" alt="..." />
                <h3 className="party">School Events</h3>
              </div>
            </div>
            <div class="col">
              <div className="content">
                <img src={Community} class="img-fluid" alt="..." />
                <h3 className="party">Communtiy/ Public</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
