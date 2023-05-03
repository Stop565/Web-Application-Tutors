import React, { useContext, useEffect } from "react";
import { Context } from "../index";
import { Col, Container, Form, Row } from "react-bootstrap";
import LessonBar from "../components/LessonBar";
import CityBar from "../components/CityBar";
import AnnouncementList from "../components/AnnouncementList";
import { observer } from "mobx-react-lite";
import { fetchAnnouncement, fetchCities, fetchLessons } from "../http/announcementAPI";

const Main = observer(() => {
    const { announcement } = useContext(Context);

    useEffect(() => {
        fetchLessons().then((data) => announcement.setLessons(data));
        fetchCities().then((data) => announcement.setCities(data));
        fetchAnnouncement().then((data) => announcement.setAnnouncements(data.rows));
    }, [])
    return (
        <Container>
            <Form className="mt-4 row">
                <Col md={3} className="mb-3">
                    <LessonBar />
                </Col>
                <Col md={9}>
                    <CityBar />
                    <AnnouncementList />
                </Col>
            </Form>

        </Container>
    )
});

export default Main;