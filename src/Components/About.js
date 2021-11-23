import React from "react";
import "../Styles/About.css";
import Wizard from "../Images/Wizard.png";

export default function About() {
  return (
    <div className="About py-5">
      <div className="col-sm-11 px-3 mx-auto d-lg-flex flex-wrap align-items-center">
        <div className="col-lg-8 pe-lg-5">
          <h1 className="about-head">About Us</h1>
          <p className="about-deta mt-4">
            We make your dream come true.
            <br />
            Our goal is to blur the line between reality and dream and create a
            world in which the impossible is possible.
            <br />
            <br />
            <br />
            Join us in building this world ...
          </p>
        </div>
        <div className="col-lg-4 ps-lg-4 text-center img-part">
          <img src={Wizard} alt="pchas-wizard" />
        </div>
      </div>
    </div>
  );
}
