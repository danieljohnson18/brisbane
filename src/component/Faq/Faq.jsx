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
      <div class="container-fluid frequently">
        <div class="row row-faq">
          <div class="col">
            HOW DO I KNOW IF AN ITEM IS AVAILABLE ON MY EVENT DATE?
          </div>
          <div class="col">WHEN DO WE HAVE TO PAY?</div>
        </div>
        <div class="row row-faq">
          <div class="col">HOW LONG IS THE HIRE PRICE FOR?</div>
          <div class="col">CAN YOU SUPPLY US AN INVOICE FOR PAYMENT?</div>
        </div>
        <div class="row row-faq">
          <div class="col">HOW DO I MAKE A BOOKING?</div>
          <div class="col">DO YOU HAVE INSURANCE?</div>
        </div>
        <div class="row row-faq">
          <div class="col">HOW MUCH IS DELIVERY? </div>
          <div class="col">CAN I COME AND PICK UP FROM YOUR WAREHOUSE?</div>
        </div>
        <div class="row row-faq">
          <div class="col">WHEN WILL YOU DELIVER MY ORDER?</div>

          <div class="col">WHAT IS YOUR CANCELLATION/POSTPONEMENT POLICY?</div>
        </div>
        <div class="row row-faq">
          <div class="col">
            WHAT IS THE DIFFERENCE BETWEEN "STANDARD" DELIVERY AND "NONԵSTANDARD
            DELIVERY"?
          </div>
          <div class="col">DO YOU SET UP THE EQUIPMENT?</div>
        </div>
        <hr />

        <div class="row row-stuck">
          <div class="col col-stuck">
            <p>
              For any non urgent inquiries, email us using the fo̶m on the
              Contact Us page
            </p>
            <p>We respond to all inqui̶ies within 1 business day.</p>
          </div>
          <div class="col col-stuck">
            <p>SMS us on 0409 222 452 for any inquiries MON-FRI, 8AM - 4PM</p>
            <p>N.B. This mobile does not receive incoming calls - TEXT only</p>
          </div>
          <div class="col col-stuck">
            <p>Like the old school way of getting things done?</p>
            <p>Phone us MON-FRI, 8AM - 4PM 07 3177 3316</p>
          </div>
        </div>
      </div>
      <Touch />
      <Footer />
    </React.Fragment>
  );
};

export default Faq;
