import React, { useState } from "react";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "./css/maps.css"
import { Icon } from "leaflet";
import LocationMarker from "./MarkerCreateAnnouncement";


const Maps = ({ bool, size }) => {

    const position = [50.505, 30]
    const customIcon = new Icon({
        iconUrl: require("../set/position.png"),
        iconSize: [40, 40]
    })

    let MapsSize = size;


    return (
        <MapContainer style={MapsSize} center={position} zoom={8} scrollWheelZoom={false} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                bool ?
                    <Marker position={position} icon={customIcon}>
                        <Popup>Я тут</Popup>
                    </Marker>
                    :
                    <LocationMarker />
            }
        </MapContainer >

    )
}

export default Maps;