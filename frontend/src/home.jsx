import { useEffect, useState } from "react";

import "./home.css"


function Home() {


    async function fetchAgencies() {
        let allAgency = await fetch("http://localhost:4000/agency");
        allAgency = await allAgency.json()
        setAgencies(allAgency);


    }

    let [agencies, setAgencies] = useState([{}]);
    useEffect(() => {

        fetchAgencies();
    }, []);


    let x = agencies.map((agenc, i) => {
        return (

            <div key={i} className="agencycard">
                <h1>{agenc.username}</h1>
                <h2>expertise-{agenc.expertise}</h2>
                <h3>location - {agenc.location}</h3>
                <p>{agenc.contact}</p>

            </div>

        )
    })

    return (
        <>
            <h1>home</h1>
            <div className="agencycardcontainer">
                {x}
            </div>
        </>
    )
}

export default Home;