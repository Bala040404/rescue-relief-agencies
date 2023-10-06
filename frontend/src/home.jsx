import { useEffect, useState } from "react";

import "./home.css";

import Agencycard from "./Agencycard";
import Search from "./Search";

function Home() {
  let [agencies, setAgencies] = useState([{}]);
  async function fetchAgencies() {
    let allAgency = await fetch("http://localhost:4000/agency");
    allAgency = await allAgency.json();
    setAgencies(allAgency);
  }

  useEffect(() => {
    fetchAgencies();
  }, []);


  let x = agencies.map((agenc, i) => {
    let cName = "agencycard";
    if (agenc.expertise) {
      cName = `agencycard ${agenc.expertise.toLowerCase()}`;
    }

    return (
      <Agencycard key={i} cls={cName} agency={agenc} />
    );


  });

  return (
    <>
      <h1>Welcome to ReliefCorp</h1>
      <p id="desc">
        A disaster relief website which provides essential information,
        resources, and support to individuals and communities affected by
        natural or man-made disasters. It offers real-time updates on ongoing
        crises, access to emergency services, and ways to donate or volunteer to
        aid relief efforts, fostering a sense of solidarity during times of
        adversity.
      </p>

      <Search agencySetter={setAgencies} agencies={agencies}></Search>
      <div className="agencycardcontainer">{x}</div>
    </>
  );
}

export default Home;
