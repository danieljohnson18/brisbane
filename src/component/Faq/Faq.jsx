import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import "../Faq/Faq.css";
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

const Faq = () => {
  return (
    <React.Fragment>
      <div className="wedding">
        <Nav />
      </div>
      <h2 className="faq-questions">
        Got questions? The most commonly asked questions are all answered below!
      </h2>
      <h3 className="general">GENERAL QUESTIONS</h3>
      <div class="container-fluid">
        <div class="row row-faq">
          <div class="col">
            HOW DO I KNOW IF AN ITEM IS AVAILABLE ON MY EVENT DATE?
          </div>
          <div class="col">WHEN DO WE HAVE TO PAY?</div>
        </div>
        <div class="row row-faq">
          <div class="col">1 of 2</div>
          <div class="col">2 of 2</div>
        </div>
        <div class="row row-faq">
          <div class="col">1 of 2</div>
          <div class="col">2 of 2</div>
        </div>
        <div class="row row-faq">
          <div class="col">1 of 2</div>
          <div class="col">2 of 2</div>
        </div>
        <div class="row row-faq">
          <div class="col">1 of 2</div>
          <div class="col">2 of 2</div>
        </div>
      </div>
      <Touch />
      <Footer />
    </React.Fragment>
  );
};

export default Faq;
