import React, { useState } from "react";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "./css/maps.css"
import { Icon } from "leaflet";
import LocationMarker from "./MarkerCreateAnnouncement";
import { observer } from "mobx-react-lite";


const Maps = observer(({ bool, size }) => {

    //const key = JSON.parse(positionStr)
    console.log()
    //let k = JSON.parse(positionArr)
    //console.log(k)

    //let position = [positionObj.lat, positionObj.lng]
    //let position = positionObj;

    const customIcon = new Icon({
        iconUrl: require("../set/position.png"),
        iconSize: [40, 40]
    })

    const position = [50, 30]
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
})

export default Maps;