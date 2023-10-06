import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Agency() {

    const { id } = useParams()
    let [currentagency, setAgency] = useState({});

    async function fetchAgency() {
        let agenc = await fetch(`http://localhost:4000/agency/${id}`)
        agenc = await agenc.json();

        setAgency(agenc.agency)
    }

    useEffect(() => {

        fetchAgency()
    }, [])



    return (
        <div>

            <p>clicking on each agency will lead to this page</p>
            <p>guys working on front end make a page out of it </p>
            <h1>{currentagency.username}</h1>
            <h1>{currentagency.location}</h1>
            <h1>{currentagency.expertise}</h1>
            <h1>{currentagency.contact}</h1>
        </div>
    )
}

export default Agency
