import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import LessonBar from "../components/LessonBar";
import CityBar from "../components/CityBar";

const Main = () => {
    return (
        <Container>
            <Form className="mt-3 row">
                <Col md={3} className="mb-3">
                    <LessonBar />
                </Col>
                <Col md={9}>
                    <div>
                        <CityBar />
                    </div>
                </Col>
            </Form>


        </Container>
    )
}

export default Main;