import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Custom.css";



function Footer() {
  return (
    <div className="footercont container-fluid text-white text-center pt-5 pb-5">

      <div className="container">
        <div className="row">

          {/* LEFT SECTION */}
          <div className="col-lg-5 col-md-12 text-start mb-5">
            <img
              src="/images/logo/img04.jpg"
              alt="logo"
              className="img-fluid mb-3"
            />

            <p className="fs-5">
              You can choose how to personalize your holiday with organized
              tours, special food and wine experiences, or enjoy the peace of
              the home you choose.
            </p>

            {/* Newsletter */}
            <p className="mt-4">Subscribe to our Newsletter</p>
            <div className="d-flex flex-column flex-lg-row gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
              <button className="btn btn-primary">SUBSCRIBE</button>
            </div>
            <small className="d-block mt-2">
              We will not share your personal info
            </small>
          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-2 col-md-4 col-6 mb-5 text-start">
            <h6 className="fs-5 mb-4">Quick Links</h6>
            <a href="#" className="d-block mb-2 text-white">Google</a>
            <a href="#" className="d-block mb-2 text-white">Dribble</a>
            <a href="#" className="d-block mb-2 text-white">Destinations</a>
            <a href="#" className="d-block mb-2 text-white">Essentials</a>
          </div>

          {/* RESOURCES */}
          <div className="col-lg-2 col-md-4 col-6 mb-5 text-start">
            <h6 className="fs-5 mb-4">Resources</h6>
            <a href="#" className="d-block mb-2 text-white">Hotels</a>
            <a href="#" className="d-block mb-2 text-white">Rental Cars</a>
            <a href="#" className="d-block mb-2 text-white">Destinations</a>
            <a href="#" className="d-block mb-2 text-white">Essentials</a>
          </div>

          {/* CONTACT */}
          <div className="col-lg-3 col-md-4 mb-5 text-start">
            <h6 className="fs-5 mb-4">Contact Information</h6>

            <p>
              <i className="fa-solid fa-address-book me-2"></i>
              New York, NY 10012
            </p>

            <p>
              <i className="fa-regular fa-envelope me-2"></i>
              info@gmail.com
            </p>

            <p>
              <i className="fa-solid fa-location-dot me-2"></i>
              San Francisco
            </p>

            {/* Social Icons */}
            <div className="d-flex mt-3">
              <a href="#" className="me-3 text-white fs-5">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="me-3 text-white fs-5">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <hr className="text-white" />

        <div className="d-flex flex-column flex-md-row justify-content-between">
          <p className="mb-0">© Peco Tricks, Trieste, Italy, 2024.</p>
          <p className="mb-0">All rights reserved</p>
        </div>
      </div>

    </div>
  );
}

export default Footer;
