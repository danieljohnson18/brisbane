import React, { useEffect, useState } from "react";
import "../Contact/Contact.css";
import "../Faq/Faq.css";
import Nav from "../Nav/Nav";
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
      <h3 className="general">GENERAL QUESTIONS</h3>
      <h2 className="faq-questions">
        Fill out the details below and one of our pa̶ty people will be in touch
        within 1 business day!
      </h2>
      <div class="container-fluid contact">
        <form>
          <div class="row row-cont">
            <div class="col">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  First Name:
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Last Name:
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Email:
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
          </div>{" "}
          <div class="row row-cont">
            <div class="col mt-0">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Mobile Phone:
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div class="col mt-0">
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Suburb
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
            <div class="col mt-0">
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Postcode
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
          </div>{" "}
          <div class="row row-cont">
            <div class="col mt-0">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Hire Start Date:
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div class="col mt-0">
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Hire End Date:
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
            <div class="col mt-0">
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Start Time:
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
            <div class="col mt-0">
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  End Time:
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
          </div>{" "}
          <div class="row row-cont">
            <div class="col mt-0">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Products you are interested in and message:
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
          </div>{" "}
          <div className="text-end">
            <button type="submit" class="btn btn-primary">
              SEND MESSAGE
            </button>
          </div>
        </form>

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
