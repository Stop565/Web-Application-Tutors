import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Card, Container, Form } from "react-bootstrap";
import { Context } from "..";
import MyOneCard from "../components/MyOneCard";
import { fetchMyAnnouncement } from "../http/privateAPI";


const MyAnnouncement = observer(() => {
    const { user } = useContext(Context);
    const { announcement } = useContext(Context);
    const { authStore } = useContext(Context);

    //console.log(user.user.id);

    useEffect(() => {
        fetchMyAnnouncement().then((data) => authStore.setMyannounce(data.rows));
    }, [])


    return (
        <Container className=" justify-content-center align-items-center" >
            <Form className="d-flex row">
                {authStore.myannounce.map((el) => {

                    return <MyOneCard key={el.id} el={el} />
                })}
            </Form>

        </Container >
    )
})

export default MyAnnouncement;