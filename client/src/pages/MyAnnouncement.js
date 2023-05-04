import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Context } from "..";
import OneCard from "../components/OneCard";



const MyAnnouncement = observer(() => {
    const { user } = useContext(Context);
    const { announcement } = useContext(Context);
    const { authStore } = useContext(Context);

    //console.log(user.user.id);

    return (
        <Container>
            {announcement.announcements.map((el) => {
                //console.log(el.userId, user.user.id)
                //if (el.userId === user.user.id)
                return <OneCard key={el.id} el={el} />
            })}
        </Container >
    )
})

export default MyAnnouncement;