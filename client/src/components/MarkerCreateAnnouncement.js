import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../index";
import { Card } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "./css/maps.css"
import { Icon } from "leaflet";
import { observer } from "mobx-react-lite";


const LocationMarker = observer(() => {
    //const [position, setPosition] = useState(null);
    const { authStore } = useContext(Context);

    const customIcon = new Icon({
        iconUrl: require("../set/position.png"),
        iconSize: [40, 40]
    })



    const map = useMapEvents({
        click(e) {
            map.locate();
            //console.log(e.latlng);
            authStore.setMyposition(e.latlng);
        },
    })

    return authStore.myposition.length === 0 ? null : (
        <Marker position={authStore.myposition} icon={customIcon}>
            <Popup>Ви знаходитесь тут?</Popup>
        </Marker>
    )
})



export default LocationMarker;