import React from 'react'
import { useNavigate } from "react-router-dom"

import "./Agencycard.css"

function Agencycard(props) {


    let redirect = useNavigate();



    return (

        <div className={props.cls} onClick={() => redirect(`/${props.agency._id}`)} >
            <h1>{props.agency.username}</h1>
            <h2>Expertise - {props.agency.expertise}</h2>
            <h3>Location - {props.agency.location}</h3>
            <h3>Contact - {props.agency.contact}</h3>
        </div >
    )
}

export default Agencycard
