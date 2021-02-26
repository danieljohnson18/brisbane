import React from "react";

const Products = ({ logo }) => {
  return (
    <div className="products">
      <div class="container">
        <h1 className="party-hire">PARTY HIRE PRODUCTS</h1>
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-12 ">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">title</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12 ">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">title</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">title</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">title</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">title</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">title</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">title</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <img src={logo} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">title</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="view-more">
          <div className="row">
            <div className="col">
              <h1 className="view"> View More </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
