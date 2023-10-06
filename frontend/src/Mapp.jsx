import { useEffect, useState } from "react";

import Map, { NavigationControl, Marker } from "react-map-gl";

let token =
  "pk.eyJ1IjoiZmVlZGxpZ2h0NDIiLCJhIjoiY2xnY3d5eW92MTF3bzNjcWxvbm83enk4YyJ9.y2k3VZCUGo5cvYNEfDp7pA";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import "./Mapp.css";

function Mapp() {
  let [agencies, setAgencies] = useState([{}]);
  const [coordinates, setCoordinates] = useState([]);
  async function fetchAgencies() {
    let allAgency = await fetch("http://localhost:4000/agency");
    allAgency = await allAgency.json();
    setAgencies(allAgency);
  }

  useEffect(() => {
    fetchAgencies();
  }, []);

  async function getCoords(loc) {
    let cord = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${loc}.json?access_token=${token}`
    );
    cord = await cord.json();
    return cord.features[0].geometry.coordinates;
  }

  // Assuming 'agencies' is an array of locations
  useEffect(() => {
    // Use Promise.all to fetch coordinates for all agencies
    Promise.all(
      agencies.map(async (agency) => {
        const coords = await getCoords(agency.location);
        return coords; // Return the coordinates to be included in the results array
      })
    )
      .then((results) => {
        setCoordinates(results); // Update the state with the fetched coordinates
      })
      .catch((error) => {
        console.error("Error fetching coordinates for agencies:", error);
      });
  }, [agencies]); // Make sure to depend on agencies, not coordinates

  console.log(coordinates);

  let markers = coordinates.map((e) => {
    return <Marker longitude={e[0]} latitude={e[1]} color="yellow" />;
  });
  return (
    <Map
      mapLib={maplibregl}
      initialViewState={{
        longitude: 77.06971,
        latitude: 20.679079,
        zoom: 4,
      }}
      style={{ width: "100%", height: " calc(100vh - 77px)" }}
      mapStyle="https://api.maptiler.com/maps/streets/style.json?key=Ofm9V0C3DECvj39aqYS6"
    >
      <NavigationControl position="top-left" />

      {markers}
    </Map>
  );
}

export default Mapp;
