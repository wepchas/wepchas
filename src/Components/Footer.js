import React from "react";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <div className="Footer mt-5">
      <div className="col-11 px-3 mx-auto text-white foot-cont content">
        <div className="py-5 ty-flex ty-flex-wrap ty-space-around justify-content-lg-between align-items-center">
          <p className="mb-0"><a href="https://play.google.com/store/apps/developer?id=Pchas+co">Check out our play account</a></p>
          <div className="text-center">
            <p className="mb-0 text-center mt-4 mt-lg-0">Pchas Games Studio</p>
            <div className="ty-flex ty-gap-4 flex-wrap mt-5 ty-justify-center">
              <a href="https://instagram.com/we.pchas"><div className="social-item insta"></div></a>
              <a href="https://fb.me/pchas.ir"><div className="social-item face"></div></a>
              <a href="https://www.linkedin.com/company/pchas"><div className="social-item linkedin"></div></a>
              <a href="https://www.youtube.com/channel/UCl75_N6gAoThAlJKJAcpQWw"><div className="social-item youtube"></div></a>
            </div>
          </div>
          <p className="mb-0 mt-4 mt-lg-0"><a href="mailto:we.pchas@gmail.com">we.pchas@gmail.com</a></p>
        </div>
        <p className="text-center mb-0 fs-6 fw-normal pb-3">© 2019 - 2021 Pchas Entertainment Corporation. All rights reserved.</p>
      </div>
    </div>
  );
}
