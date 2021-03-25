import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import "../Faq/Faq.css";
import Party from "../../assets/img/Wedding party hire.JPG";
import Touch from "../Touch/Touch";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Mail from "../../assets/img/Mail-01.svg";
import Phone from "../../assets/img/Phone-01.svg";
import SMS from "../../assets/img/SMS-01.svg";
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
          <div class="col mr-2">
            HOW DO I KNOW IF AN ITEM IS AVAILABLE ON MY EVENT DATE?
          </div>
          <div class="col">WHEN DO WE HAVE TO PAY?</div>
        </div>
        <div class="row row-faq">
          <div class="col mr-2">HOW LONG IS THE HIRE PRICE FOR?</div>
          <div class="col">CAN YOU SUPPLY US AN INVOICE FOR PAYMENT?</div>
        </div>
        <div class="row row-faq">
          <div class="col mr-2">HOW DO I MAKE A BOOKING?</div>
          <div class="col">DO YOU HAVE INSURANCE?</div>
        </div>
        <div class="row row-faq">
          <div class="col mr-2">HOW MUCH IS DELIVERY? </div>
          <div class="col">CAN I COME AND PICK UP FROM YOUR WAREHOUSE?</div>
        </div>
        <div class="row row-faq">
          <div class="col mr-2">WHEN WILL YOU DELIVER MY ORDER?</div>

          <div class="col">WHAT IS YOUR CANCELLATION/POSTPONEMENT POLICY?</div>
        </div>
        <div class="row row-faq">
          <div class="col mr-2">
            WHAT IS THE DIFFERENCE BETWEEN "STANDARD" DELIVERY AND "NONԵSTANDARD
            DELIVERY"?
          </div>
          <div class="col">DO YOU SET UP THE EQUIPMENT?</div>
        </div>
        <hr />
        <figure class="text-center">
          <blockquote class="blockquote">
            <p className="stuck">Still Stuck?</p>
          </blockquote>
        </figure>

        <div class="row row-stuck">
          <div class="col col-stuck mr-2">
            <div class="text-center">
              <img src={Mail} class="rounded mail" alt="mail" />
            </div>
            <p>
              For any non urgent inquiries, email us using the form on the
              <span>Contact Us</span> page
            </p>
            <p>We respond to all inquiries within 1 business day.</p>
          </div>
          <div class="col col-stuck mx-2">
            <div class="text-center">
              <img src={Phone} class="rounded" alt="mail" />
            </div>
            <p>
              SMS us on <span>0409 222 452</span> for any inquiries MON-FRI, 8AM
              - 4PM
            </p>
            <p>N.B. This mobile does not receive incoming calls - TEXT only</p>
          </div>
          <div class="col col-stuck ml-2">
            <div class="text-center">
              <img src={SMS} class="rounded" alt="mail" />
            </div>
            <p>Like the old school way of getting things done?</p>
            <p>
              Phone us MON-FRI, 8AM - 4PM <span>07 3177 3316</span>
            </p>
          </div>
        </div>
      </div>
      <Touch />
      <Footer />
    </React.Fragment>
  );
};

export default Faq;
