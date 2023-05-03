import React, { useContext, useEffect } from "react";
import { Context } from "../index";
import { Col, Container, Form } from "react-bootstrap";
import LessonBar from "../components/LessonBar";
import CityBar from "../components/CityBar";
import AnnouncementList from "../components/AnnouncementList";
import { observer } from "mobx-react-lite";
import { fetchAnnouncement, fetchCities, fetchLessons } from "../http/announcementAPI";
import Pages from "../components/Pages";

const Main = observer(() => {
    const { announcement } = useContext(Context);

    useEffect(() => {
        fetchLessons().then((data) => announcement.setLessons(data));
        fetchCities().then((data) => announcement.setCities(data));
        fetchAnnouncement(null, null, 1, 4).then((data) => {
            announcement.setAnnouncements(data.rows);
            announcement.setTotalCount(data.count);
        });
    }, [])


    useEffect(() => {
        fetchAnnouncement(announcement.selectedLesson.id, announcement.selectedCity.id, announcement.page, 4).then(data => {
            announcement.setAnnouncements(data.rows)
            announcement.setTotalCount(data.count)
        })
    }, [announcement.page, announcement.selectedLesson, announcement.selectedCity,])



    return (
        <Container>
            <Form className="mt-4 row">
                <Col md={3} className="mb-3">
                    <LessonBar />
                </Col>
                <Col md={9}>
                    <CityBar />
                    <AnnouncementList />
                    <Pages />
                </Col>
            </Form>

        </Container>
    )
});

export default Main;