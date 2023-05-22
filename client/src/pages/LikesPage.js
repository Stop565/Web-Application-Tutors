import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Card, Container, Form } from "react-bootstrap";
import { Context } from "..";
import OneCard from "../components/OneCard";
import { fetchLikes } from "../http/privateAPI";


const LikesPage = observer(() => {
    const { user } = useContext(Context);
    const { announcement } = useContext(Context);
    const { authStore } = useContext(Context);

    //console.log(user.user.id);

    useEffect(() => {
        fetchLikes().then((data) => authStore.setLikes(data.rows))
    }, [])


    console.log(announcement.announcements)

    return (
        <Container className=" justify-content-center align-items-center" >
            <Form className="d-flex row">
                {announcement.announcements.map((el) => {
                    let flag = false;
                    authStore.likes.map((like) => {
                        if (like.announcementId === el.id) flag = true;
                    })
                    if (flag) return <OneCard key={el.id} el={el} />
                })}
            </Form>

        </Container >
    )
})

export default LikesPage;