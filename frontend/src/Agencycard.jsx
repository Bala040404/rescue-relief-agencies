import React from "react";
import { useNavigate } from "react-router-dom";

import "./Agencycard.css";

function Agencycard(props) {
  let redirect = useNavigate();
  return (
    <div className={props.cls} onClick={() => redirect(`/${props.agency._id}`)}>
      <h1>{props.agency.username}</h1>
      <div className="card-text">
        <span>
          <h3>Expertise</h3>
          <h3>Location</h3>
          <h3>Contact</h3>
        </span>
        <span>
          <h3>: {props.agency.expertise}</h3>
          <h3>: {props.agency.location}</h3>
          <h3>: {props.agency.contact}</h3>
        </span>
      </div>
    </div>
  );
}

export default Agencycard;
