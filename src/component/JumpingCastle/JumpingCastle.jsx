import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import "../JumpingCastle/JumpingCastle.css";
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
import { API_BASE_URL } from "../../constants/apiConstants";
import Modals from "../Modals/Modals";

const JumpingCastle = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
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
        setCoins(productData);
        console.log(coins);
      }
    });
  }, []);
  return (
    <React.Fragment>
      <div className="wedding">
        <Nav />
      </div>

      <div className="container-fluid">
        <div class="row">
          <div class="col-lg-3">
            <ul class="list-group">
              <h2 className="categories">Categories</h2>
              <Link className="link" to="/medium">
                <li class="list-group-item">Medium Bouncy jumping Castles</li>
              </Link>
              <li class="list-group-item">Large Combo Jumping Castles</li>
              <li class="list-group-item">Water Slides</li>
              <li class="list-group-item">Inflatable D y Slides</li>
              <li class="list-group-item">Adults Jumping Castles</li>
              <li class="list-group-item">Interactive Games</li>
              <li class="list-group-item">Inflatable Spo ts Games</li>
              <li class="list-group-item">Inflatable Ca nival Games</li>
            </ul>
          </div>
          <div class="col-lg-9">
            <div className="entries">
              <div className="selections">
                <label for="inputPassword5" class="form-label postcode">
                  Event Date
                </label>
                <input
                  type="date"
                  id="inputPassword5"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                />
                <label for="inputPassword5" class="form-label postcode">
                  Postcode
                </label>
                <input
                  type="number"
                  id="inputPassword5"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                />
              </div>
            </div>
            <div className="jump-content">
              <h1 className="content-header">Jumping Castle</h1>
              <p className="content-para">
                Don't Stop The Party has over 80 inflatables for hire with
                themes, sizes and styles to suit eve y occasion. Medium bouncers
                and large combos including Frozen, Minions, Disney, Pirates,
                P incess, Super Heroes, Jungle & more! Adults jumping castles and
                inflatable interactive games including Disco bouncers, Gladiator
                Cage, Bouncy Boxing and Sumo Suits.
              </p>
              <p className="content-para">
                Holding a larger event like a spo ts presentation or corporate
                fun day? Try any one of our inflatable obstacle courses or
                multi-player games like Wrecking Ball, Meltdown or Hung y Hippos!
              </p>
              <p className="content-para">
                Our experience at over 5000 events over 7 years means we are
                experts at helping you with any type of celebration including
                birthday parties, sporting, carnivals, school fetes, corporate
                events, church groups and charity fundraisers. Take a look at
                our hire range above and book online or get in touch. We service
                and deliver to all areas in Brisbane North, Brisbane South,
                Brisbane East and Brisbane West.
              </p>
              <h1 className="content-header">Medium Bouncy Jumping Castles</h1>
              {coins.map((coin, index) => {
                return (
                  <div class="row row-marquees" key={index}>
                    <div class="col-lg-6 col-md-6 col-sm-12 p-5">
                      <div class="card">
                        <img src={Marq1} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="text-start">
                            Marquee - DIY Pop Up - 3m X 6m
                          </p>
                          <p className="price-text">From $75.00</p>
                          <Modals />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 p-5">
                      <div class="card">
                        <img src={Marq2} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="text-start">
                            Marquee - DIY Pop Up - 3m X 6m
                          </p>
                          <p className="price-text">From $75.00</p>
                          <Modals />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 p-5">
                      <div class="card">
                        <img src={Marq3} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="text-start">Marquee - Pagoda 3m X 3m</p>
                          <p className="price-text">From $75.00</p>
                          <Modals />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 p-5">
                      <div class="card">
                        <img src={Marq4} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="text-start">Marquee - Pagoda - 6m X 3m</p>
                          <p className="price-text">From $75.00</p>
                          <Modals />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 p-5">
                      <div class="card">
                        <img src={Marq5} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="text-start">
                            Marquee - Structure - 6m X 3m
                          </p>
                          <p className="price-text">From $75.00</p>
                          <Modals />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 p-5">
                      <div class="card">
                        <img src={Marq6} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="text-start">
                            Marquee - Structure - 6m X 6m
                          </p>
                          <p className="price-text">From $75.00</p>
                          <Modals />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 p-5">
                      <div class="card">
                        <img src={Marq7} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="text-start">
                            Marquee - Structure - 6m X 9m
                          </p>
                          <p className="price-text">From $75.00</p>
                          <Modals />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 p-5">
                      <div class="card">
                        <img src={Marq8} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="text-start">
                            Marquee - Structure - 6m X 12m
                          </p>
                          <p className="price-text">From $75.00</p>
                          <Modals />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Touch />
      <Footer />
    </React.Fragment>
  );
};

export default JumpingCastle;
