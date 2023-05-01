import React, { useContext } from "react";
import { Context } from "..";
import { Form } from "react-bootstrap";
import OneCard from "./OneCard";

const AnnouncementList = () => {
    const { announcement } = useContext(Context)


    return (
        <Form className="d-flex ">
            {announcement.announcements.map((el) =>
                <OneCard key={el.id} el={el} />
            )}


        </Form>

    )
}

export default AnnouncementList;