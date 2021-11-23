import React from "react";
import "../Styles/NextPro.css";

export default function NextPro() {
  return (
    <div className="NextPro">
      <div className="col-sm-11 px-3 mx-auto py-5 d-lg-flex flex-wrap">
        <div className="col-lg-8 pe-lg-5">
          <h1 className="next-head">Work On new Dream</h1>
          <p className="next-deta mt-4">
            In this field, information about the new game is written.
          </p>
        </div>
        <div className="col-6 col-sm-5 col-lg-4 ps-lg-5 mx-auto mx-lg-0">
          <div className="days-con">
            <div className="number">7</div>
            <div className="days-box d-flex flex-column justify-content-end">
              <p className="mb-0 text-center text-white mb-3">
                <span className="days">Days</span>
                <br />
                <span className="remaining">Remaining</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
