import React from "react";

const Products = ({
  Medium,
  Glow,
  Water,
  Large,
  Obstacle,
  Table,
  Fencing,
  Chair,
}) => {
  return (
    <div className="products">
      <div class="container">
        <h1 className="party-hire">PARTY HIRE PRODUCTS</h1>
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-12 ">
            <div className="card">
              <img src={Medium} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">MEDIUM BOUNCY CASTLE</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12 ">
            <div className="card">
              <img src={Large} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">LARGE COMBO CASTLE</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <img src={Obstacle} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">OBSTACLE COURSES</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <img src={Water} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">INFLATABLE WATER SLIDES</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <img src={Table} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">TABLE AND DRY BARS</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <img src={Chair} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">CHAIRS AND STOOLS</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <img src={Glow} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">GLOW FURNITURES</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <img src={Fencing} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">FENCING AND BOLLARDS</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="view-more">
          <div className="row">
            <div className="col">
              <h1 className="view"> View More</h1>
              <i class="bx bxs-chevron-down"></i>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
