import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import LessonBar from "../components/LessonBar";
import CityBar from "../components/CityBar";
import AnnouncementList from "../components/AnnouncementList";

const Main = () => {
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
}

export default Main;