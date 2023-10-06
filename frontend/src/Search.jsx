import React from 'react';
import { useState } from "react";


import "./Search.css"
function Search(props) {
    let [search, setSearch] = useState("");
    async function handleSubmit(e) {
        e.preventDefault();

        let newList = props.agencies.filter((agency) => {
            return agency.expertise.toLowerCase() === search.toLowerCase() || agency.location.toLowerCase() === search.toLowerCase();
        });

        props.agencySetter(newList);
    }


    return (

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

    )
}

export default Search
