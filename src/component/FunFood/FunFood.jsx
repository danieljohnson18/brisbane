import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import "../JumpingCastle/JumpingCastle.css";
import Touch from "../Touch/Touch";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Marq1 from "../../assets/img/Marquee – DIY Pop Up – 3m x 3m.JPG";
import axios from "axios";
import { API_BASE_URL } from "../../constants/apiConstants";

const FunFood = () => {
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
              <li class="list-group-item">Popco n Machine</li>
              <li class="list-group-item">Snow Cone Machine</li>
              <li class="list-group-item">Fai y Floss Machine</li>
              <li class="list-group-item">Slushie Cocktail Machine</li>
              <li class="list-group-item">Hot Dog Steamer</li>
            </ul>
          </div>
          <div class="col-lg-9">
            <div className="entries">
              <label for="inputPassword5" class="form-label">
                Password
              </label>
              <input
                type="date"
                id="inputPassword5"
                class="form-control"
                aria-describedby="passwordHelpBlock"
              />
              <label for="inputPassword5" class="form-label">
                Password
              </label>
              <input
                type="number"
                id="inputPassword5"
                class="form-control"
                aria-describedby="passwordHelpBlock"
              />
            </div>
            <div className="jump-content">
              <h1 className="content-header">Fun Foods</h1>
              <p className="content-para">
                We have a great range of add-on ca nival & concession equipment
                available for hire around B isbane. Make cinema quality popco n,
                side show style fai y floss or cool down with snow cones and
                slushies!
              </p>
              <p className="content-para">
                Our hire packages come with absolutely eve ything you need to
                either consume or re-sell fun foods at your bi thday, school
                event, markets or corporate event.
              </p>

              <h1 className="content-header">Popco n Machine</h1>
              {coins.map((coin, index) => {
                return (
                  <div class="row row-marquees" key={index}>
                    <div class="col-lg-6 col-md-6 col-sm-12 p-5">
                      <div class="card">
                        <img src={Marq1} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="text-start">{coin.name}</p>
                          <p className="price-text">From $75.00</p>
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

export default FunFood;
