import React, { useState } from "react";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "./css/maps.css"
import { Icon } from "leaflet";


const LocationMarker = () => {
    const [position, setPosition] = useState(null);

    const customIcon = new Icon({
        iconUrl: require("../set/position.png"),
        iconSize: [40, 40]
    })



    const map = useMapEvents({
        click(e) {
            map.locate();
            //console.log(e.latlng);
            setPosition(e.latlng);
        },
    })

    return position === null ? null : (
        <Marker position={position} icon={customIcon}>
            <Popup>Ви знаходитесь тут?</Popup>
        </Marker>
    )
}



export default LocationMarker;