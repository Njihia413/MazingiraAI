import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css"
import L from 'leaflet'
import locations from "../utils/locations";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


function Map(){
    const [map, setMap] = useState(null)

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    useEffect(() => {
        if(!document.getElementById('map').innerHTML){
            const map = L.map('map').setView([ 0.0236, 37.9062], 7)
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            locations.forEach(l => {
                const marker = new L.marker([l.longitude, l.latitude])
                  .bindPopup(l.name)
                  .addTo(map);
            })
            setMap(map)
        }

        return () => map?.remove()
    }, [])

    return (
        <div id="map" style={{height: '100vh'}}></div>
    )
}

export default Map