import React from "react";
import { Link } from "react-router-dom";
import "../Styles/MiniBox.css";

export default function MiniBox(props) {
  return (
    <div className="MiniBox py-5">
      <div className="col-sm-11 px-3 mx-auto">
        <div className="d-flex justify-content-between mb-4 align-items-center">
          <h6 className="box-heading">{props.heading}</h6>
          <Link
            className="box-link text-mypurple text-decoration-none"
            to={props.link}
          >
            See all Games
          </Link>
        </div>
        {props.children}
      </div>
    </div>
  );
}
