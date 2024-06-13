import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css"
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Navbar from "./Navbar";
import generateRemarks from "../utils/weatherRemarks";


function Map(){
    const [map, setMap] = useState(null)

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    function onMapClick(e, map) {
        const popup = L.popup()
        const { lat, lng } = e.latlng
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=`+process.env.REACT_APP_OPENWEATHER_KEY

        fetch(url)
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    const description = data.weather[0].description
                    const humidity = data.main.humidity
                    const pressure = data.main.pressure
                    const temperature = data.main.temp
                    const remarks = generateRemarks(description, humidity, pressure)
                    
                    popup
                        .setLatLng(e.latlng)
                        .setContent(`
                            <b>WEATHER SUMMARY</b> <br/><br/>
                            <b>Humidity: </b> ${humidity}% <br/>
                            <b>Pressure: </b> ${pressure}hPa <br/>
                            <b>Temperature: </b> ${Math.ceil(temperature - 273)}°C <br/><br/>
                            ${remarks}
                        `)
                        .openOn(map);
                })
            }
        })

    }

    useEffect(() => {
        if(!document.getElementById('map').innerHTML){
            const map = L.map('map').setView([ 0.0236, 37.9062], 7)
            map.on('click', e=>onMapClick(e, map))

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            setMap(map)
        }

        return () => map?.remove()
    }, [])

    return (
        <div className="chat h-screen">
            <Navbar />
            <div id="map" style={{height: '100vh'}}></div>
        </div>
    )
}

export default Map