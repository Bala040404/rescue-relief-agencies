import React from 'react'

function Agencycard(props) {
    return (

        <div className={props.cls} >
            <h1>{props.agency.username}</h1>
            <h2>Expertise - {props.agency.expertise}</h2>
            <h3>Location - {props.agency.location}</h3>
            <h3>Contact - {props.agency.contact}</h3>
        </div >
    )
}

export default Agencycard
