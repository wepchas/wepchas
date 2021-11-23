import React from "react";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <div className="Footer mt-5">
      <div className="col-11 px-3 mx-auto text-white foot-cont">
        <div className="py-5 d-flex flex-wrap justify-content-around justify-content-lg-between align-items-center">
          <p className="mb-0">Phone : +98 021 555 46 78</p>
          <div>
            <p className="mb-0 text-center mt-4 mt-lg-0">Pchas Games Studio</p>
            <div className="d-flex flex-wrap mt-5">
              <div className="social-item insta"></div>
              <div className="social-item face"></div>
              <div className="social-item linkedin"></div>
              <div className="social-item youtube"></div>
            </div>
          </div>
          <p className="mb-0 mt-4 mt-lg-0">Games@Pchas.com</p>
        </div>
        <p className="text-center mb-0 fs-6 fw-normal pb-3">© 2019 - 2021 Pchas Entertainment Corporation. All rights reserved.</p>
      </div>
    </div>
  );
}
