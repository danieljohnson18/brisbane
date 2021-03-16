import React from "react";
import { Link } from "react-router-dom";
import "../Services/Services.css";

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
        <div class="row">
          <div class="col-lg-2 col-md-4 col-sm-4 ">
            <div className="card">
              <img src={Backyard} class="card-img-top" alt="..." />
              <h5 className="card-title">Backyard Parties</h5>
              <div className="card-body"></div>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-4 ">
            <div className="card">
              <img src={Weddings} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/wedding"> Weddings</Link>
                </h5>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-4">
            <div className="card">
              <img src={Business} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Business/ Corporate</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-4">
            <div className="card">
              <img src={Sport} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Sporting Clubs</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-4">
            <div className="card">
              <img src={School} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">School Events</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-4 pl-4">
            <div className="card">
              <img src={Community} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Communtiy/ Public</h5>
              </div>
            </div>
          </div>
        </div>

        {/*<div class="row">
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
  </div>*/}
      </div>
    </div>
  );
};

export default Services;
