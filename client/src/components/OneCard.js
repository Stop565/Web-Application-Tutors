import React from "react";
import { Col, Form } from "react-bootstrap";

const OneCard = ({ el }) => {
    return (
        <Col >
            {el.name}
        </Col>
    )
}

export default OneCard;