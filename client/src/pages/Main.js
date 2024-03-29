import React, { useContext, useEffect } from "react";
import { Context } from "../index";
import { Col, Container, Form } from "react-bootstrap";
import LessonBar from "../components/LessonBar";
import CityBar from "../components/CityBar";
import AnnouncementList from "../components/AnnouncementList";
import { observer } from "mobx-react-lite";
import { fetchAnnouncement, fetchCities, fetchLessons } from "../http/announcementAPI";
import Pages from "../components/Pages";
import FooterComponent from "../components/FooterComponent";

const Main = observer(() => {
    const { announcement } = useContext(Context);

    useEffect(() => {
        fetchLessons().then((data) => announcement.setLessons(data));
        fetchCities().then((data) => announcement.setCities(data));
        fetchAnnouncement(null, null, 1, 8).then((data) => {
            announcement.setAnnouncements(data.rows);
            announcement.setTotalCount(data.count);
        });
    }, [])


    useEffect(() => {
        fetchAnnouncement(announcement.selectedLesson.id,
            announcement.selectedCity.id,
            announcement.page,
            announcement.limit
        ).then(data => {
            //console.log(data)
            announcement.setAnnouncements(data.rows)
            announcement.setTotalCount(data.count)
        })
    }, [announcement.page, announcement.selectedLesson, announcement.selectedCity,])


    useEffect(() => {
        if (announcement.inputSearch.length > 0) {
            const array = announcement.announcements.filter(function (el) {
                return el.name.toLowerCase().includes(announcement.inputSearch.toLowerCase())
            })
            //console.log(array);
            announcement.setSearchAnnouncements(array);
        }
    }, [announcement.inputSearch])


    return (<>
        <Container >
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
        <FooterComponent />
    </>
    )
});

export default Main;