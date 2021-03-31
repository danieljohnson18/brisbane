import React, { useEffect } from "react";
import Nav from "../Nav/Nav";
import "../Wedding/Wedding.css";
import Party from "../../assets/img/Wedding party hire.JPG";
import Touch from "../Touch/Touch";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Marq1 from "../../assets/img/Marquee – DIY Pop Up – 3m x 3m.JPG";
import Marq2 from "../../assets/img/Marquee – DIY Pop Up – 3m x 6m.JPG";
import Marq3 from "../../assets/img/Marquee – Pagoda – 3m x 3m.JPG";
import Marq4 from "../../assets/img/Marquee – Pagoda – 6m x 3m.JPG";
import Marq5 from "../../assets/img/Marquee – Pagoda – 6m x 6m.JPG";
import Marq6 from "../../assets/img/Marquee – Pagoda – 6m x 12m(uiYIPXYmjmQ).jpeg";
import Marq7 from "../../assets/img/Marquee – Structure – 6m x 3m.JPG";
import Marq8 from "../../assets/img/Marquee – Structure – 6m x 3m.JPG";
import axios from "axios";
import Modals from "../Modals/Modals";
import { API_BASE_URL } from "../../constants/apiConstants";

const Medium = () => {
  useEffect(() => {
    axios({
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      method: "get",
      url:
        "http://ec2-3-22-234-186.us-east-2.compute.amazonaws.com/partyservices/api/products",
      withCredentials: true,
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        const results = response.data.results.filter((obj) => obj);

        const productData = results;
        console.log(productData);
      }
    });
  }, []);
  return (
    <React.Fragment>
      <div className="wedding">
        <Nav />
      </div>
      <div class="container-fluid">
        <div className="paginator">
          <Link className="link" to="/jumpingcastle">
            <div className="text-start">
              <h2 className="headies">Jumping Castle</h2>
            </div>
          </Link>
          <Link className="link" to="/medium">
            <div className="text-start ml-2">
              <h2 className="headies">Medium Bouncy Jumping Castles</h2>
            </div>
          </Link>
        </div>
        <div className="text-center">
          <h1 className="party-text">Medium Bouncy Jumping Castles</h1>
        </div>
        <div class="row row-marquees">
          <div class="col-lg-4 col-md-6 col-sm-12 p-5">
            <div class="card">
              <img src={Marq1} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="text-start">Marquee - DIY Pop Up - 3m X 3m</p>
                <p className="price-text">From $75.00</p>
                <Modals />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-5">
            <div class="card">
              <img src={Marq2} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="text-start">Marquee - DIY Pop Up - 3m X 6m</p>
                <p className="price-text">From $75.00</p>
                <Modals />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-5">
            <div class="card">
              <img src={Marq3} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="text-start">Marquee - Pagoda 3m X 3m</p>
                <p className="price-text">From $75.00</p>
                <Modals />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-5">
            <div class="card">
              <img src={Marq4} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="text-start">Marquee - Pagoda - 6m X 3m</p>
                <p className="price-text">From $75.00</p>
                <Modals />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-5">
            <div class="card">
              <img src={Marq5} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="text-start">Marquee - Structure - 6m X 3m</p>
                <p className="price-text">From $75.00</p>
                <Modals />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-5">
            <div class="card">
              <img src={Marq6} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="text-start">Marquee - Structure - 6m X 6m</p>
                <p className="price-text">From $75.00</p>
                <Modals />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-5">
            <div class="card">
              <img src={Marq7} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="text-start">Marquee - Structure - 6m X 9m</p>
                <p className="price-text">From $75.00</p>
                <Modals />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-5">
            <div class="card">
              <img src={Marq6} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="text-start">Marquee - Structure - 6m X 6m</p>
                <p className="price-text">From $75.00</p>
                <Modals />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-5">
            <div class="card">
              <img src={Marq7} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="text-start">Marquee - Structure - 6m X 9m</p>
                <p className="price-text">From $75.00</p>
                <Modals />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-5">
            <div class="card">
              <img src={Marq6} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="text-start">Marquee - Structure - 6m X 6m</p>
                <p className="price-text">From $75.00</p>
                <Modals />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-5">
            <div class="card">
              <img src={Marq7} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="text-start">Marquee - Structure - 6m X 9m</p>
                <p className="price-text">From $75.00</p>
                <Modals />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-5">
            <div class="card">
              <img src={Marq8} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="text-start">Marquee - Structure - 6m X 12m</p>
                <p className="price-text">From $75.00</p>
                <Modals />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Touch />
      <Footer />
    </React.Fragment>
  );
};

export default Medium;
