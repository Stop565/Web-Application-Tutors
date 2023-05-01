import React from "react";
import { Card, Col, Form, Image } from "react-bootstrap";
import './css/onecard.css'

const OneCard = ({ el }) => {
    return (
        <Col md={6}  >
            <Card className="card" style={{ height: 220, cursor: 'pointer' }}>
                <Form className="d-flex ">
                    <Image width={200} height={200} src={el.img}></Image>
                    <Col >{el.name}</Col>
                </Form>
            </Card>

        </Col>
    )
}

export default OneCard;