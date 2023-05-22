import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { Form, Row } from "react-bootstrap";
import OneCard from "./OneCard";
import { observer } from "mobx-react-lite";
import { fetchLikes } from "../http/privateAPI";



const AnnouncementList = observer(() => {
    const { announcement } = useContext(Context);
    const { authStore } = useContext(Context)

    useEffect(() => {
        fetchLikes().then((data) => authStore.setLikes(data.rows))
    }, [])

    useEffect(() => {
        if (announcement.inputSearch.length > 0) {
            const array = announcement.announcements.filter(function (el) {
                return el.name.toLowerCase().includes(announcement.inputSearch.toLowerCase())
            })
            console.log(array);
            announcement.setSearchAnnouncements(array);
        }
    }, [announcement.inputSearch])

    return (
        <>
            {
                announcement.inputSearch === "" &&
                <Row className="d-flex ">
                    {announcement.announcements.map((el) => {
                        return <OneCard key={el.id} el={el} />
                    }

                    )}
                </Row>
            }
            {
                announcement.inputSearch &&
                <Row className="d-flex ">
                    {announcement.searchAnnouncements.map((el) => {
                        return <OneCard key={el.id} el={el} />
                    }

                    )}
                </Row>
            }
        </>
    )
})

export default AnnouncementList;