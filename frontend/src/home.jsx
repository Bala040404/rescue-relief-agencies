import { useEffect, useState } from "react";

import "./home.css";

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

  let [search, setSearch] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    let newList = agencies.filter((agency) => {
      return agency.expertise.toLowerCase() === search.toLowerCase() || agency.location.toLowerCase() === search.toLowerCase();
    });

    setAgencies(newList);
  }

  let x = agencies.map((agenc, i) => {
    let cName = "agencycard";
    if (agenc.expertise) {
      cName = `agencycard ${agenc.expertise.toLowerCase()}`;
    }
    return (
      <div key={i} className={cName}>
        <h1>{agenc.username}</h1>
        <h2>Expertise - {agenc.expertise}</h2>
        <h3>Location - {agenc.location}</h3>
        <h3>Contact - {agenc.contact}</h3>
      </div>
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
      <form id="search" onSubmit={handleSubmit}>
        <input
          required
          placeholder="Search for agency type/location"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.trim());
          }}
        />
        <button>Search</button>
      </form>
      <div className="agencycardcontainer">{x}</div>
    </>
  );
}

export default Home;
