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


    let x = agencies.map((agenc) => {
        return (
            <div >
                <h1>name - {agenc.username}</h1>
                <h3>location - {agenc.location}</h3>
            </div>
        )
    })

    return (
        <>
            <h1>home</h1>
            <div className="container">
                {x}
            </div>
        </>
    )
}

export default Home;