import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Card, Form, ListGroup, ListGroupItem, Row } from "react-bootstrap";

const CityBar = observer(() => {
    const { announcement } = useContext(Context);

    return (
        <Form className="d-flex" >
            {announcement.cities.map((el) =>
                <Card key={el.id}
                    className="p-3"
                    style={{ cursor: 'pointer' }}
                    border={el.id === announcement.selectedCity.id ? 'danger' : 'light'}

                    onClick={() => announcement.setSelectedCity(el)}
                >
                    {el.name}
                </ Card>
            )}
        </ Form>
    )
});
export default CityBar;