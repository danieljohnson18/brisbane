import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div class="container">
        <div class="row">
          <div class="col">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <h1 className="pages">Popular Pages</h1>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#">
                  Backyard Parties
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#">
                  weddings
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#">
                  Business/Corporate
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#">
                  Sporting Clubs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#">
                  School Events
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#">
                  Community/Public
                </a>
              </li>
            </ul>
          </div>
          <div class="col">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <h1 className="pages">Quick Links</h1>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#">
                  Delivery
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#">
                  Reviews
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#">
                  FAQ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="#">
                  Party Hire
                </a>
              </li>
            </ul>
          </div>
          <div class="col">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <h1 className="pages">Contact Us</h1>
                </a>
              </li>
              <div className="social">
                <li class="nav-item socials">
                  <a class="nav-link socials" href="#">
                    <i class="bx bxl-facebook"></i>
                  </a>
                </li>
                <li class="nav-item socials">
                  <a class="nav-link socials" href="#">
                    <i class="bx bxl-instagram"></i>
                  </a>
                </li>
                <li class="nav-item socials">
                  <a class="nav-link socials" href="#">
                    <i class="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li class="nav-item socials">
                  <a class="nav-link socials" href="#">
                    <i class="bx bxl-twitter"></i>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 className="footer-text">
              © 2021 | Tiger Party Hire | Jumping Castle Hire Brisbane | Party
              Hire Brisbane | Letter Light Hire Brisbane
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
