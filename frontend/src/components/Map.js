import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css"
import L from 'leaflet'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function Map(){
    const [map, setMap] = useState(null)

    useEffect(() => {
        if(!document.getElementById('map').innerHTML){
            const map = L.map('map').setView([ 0.0236, 37.9062], 7)
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            setMap(map)
        }

        return () => map?.remove()
    }, [])

    return (
        <div id="map" style={{height: '100vh'}}></div>
    )
}

export default Map