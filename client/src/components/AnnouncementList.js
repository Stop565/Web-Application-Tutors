import React, { useContext } from "react";
import { Context } from "../index";
import { Form, Row } from "react-bootstrap";
import OneCard from "./OneCard";



const AnnouncementList = () => {
    const { announcement } = useContext(Context)

    return (
        <Row className="d-flex ">
            {announcement.announcements.map((el) =>
                <OneCard key={el.id} el={el} />
            )}


        </Row>

    )
}

export default AnnouncementList;