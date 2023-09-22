
// import { useRef, useEffect, useState } from 'react';

import Map, { NavigationControl, Marker } from 'react-map-gl';

import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

// import * as maptilersdk from '@maptiler/sdk';
import './Mapp.css'


// function Map() {
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const tokyo = { lng: 139.753, lat: 35.6844 };
//     const [zoom] = useState(14);
//     maptilersdk.config.apiKey = 'Ofm9V0C3DECvj39aqYS6';


//     useEffect(() => {
//         if (map.current) return; // stops map from intializing more than once

//         map.current = new maptilersdk.Map({
//             container: mapContainer.current,
//             style: maptilersdk.MapStyle.STREETS,
//             center: [tokyo.lng, tokyo.lat],
//             zoom: zoom
//         });


//     }, [tokyo.lng, tokyo.lat, zoom]);


//     return (
//         <div className="map-wrap">
//             <div ref={mapContainer} className="map" />
//         </div>
//     );
// }



function Mapp() {

    return (
        <Map mapLib={maplibregl}
            initialViewState={{
                longitude: 77.069710,
                latitude: 20.679079,
                zoom: 4
            }}
            style={{ width: "100%", height: " calc(100vh - 77px)" }}
            mapStyle="https://api.maptiler.com/maps/streets/style.json?key=Ofm9V0C3DECvj39aqYS6"
        >
            <NavigationControl position="top-left" />
            <Marker longitude={77.069710} latitude={28.679079} />
            <Marker longitude={79.3190} latitude={12.9487} />

        </Map>
    )
}


export default Mapp


