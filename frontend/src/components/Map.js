import React from "react";
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function Map(){
    return (
        <MapContainer center={[-0.023559, 37.906193]} zoom={7} scrollWheelZoom={false} style={{height: '100vh'}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-0.023559, 37.906193]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map