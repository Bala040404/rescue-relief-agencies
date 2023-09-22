import { useEffect, useState } from "react";

import "./home.css"


function Home() {


    let [agencies, setAgencies] = useState([{}]);
    async function fetchAgencies() {
        let allAgency = await fetch("http://localhost:4000/agency");
        allAgency = await allAgency.json()
        setAgencies(allAgency);


    }

    useEffect(() => {

        fetchAgencies();
    }, []);

    let [search, setSearch] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        let newList = agencies.filter((agency) => {
            return agency.expertise === search || agency.location === search;
        });


        setAgencies(newList);
    }



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
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onChange={(e) => {
                    setSearch(e.target.value)
                }} />
                <button>search</button>
            </form>
            <div className="agencycardcontainer">
                {x}
            </div>
        </>
    )
}

export default Home;