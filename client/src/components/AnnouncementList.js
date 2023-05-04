import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { Form, Row } from "react-bootstrap";
import OneCard from "./OneCard";
import { observer } from "mobx-react-lite";



const AnnouncementList = observer(() => {
    const { announcement } = useContext(Context)


    return (
        <Row className="d-flex ">
            {announcement.announcements.map((el) => {
                return <OneCard key={el.id} el={el} />
            }

            )}


        </Row>

    )
})

export default AnnouncementList;