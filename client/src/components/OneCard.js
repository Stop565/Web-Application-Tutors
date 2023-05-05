import React, { useContext, useState, useEffect } from "react";
import { Context } from "../index";
import { Button, Card, Col, Form, Image } from "react-bootstrap";
import './css/onecard.css'
import { observer } from "mobx-react-lite";
import heart from '../set/heart-fill.svg'
import { useNavigate } from "react-router-dom"
import { ANNOUNCEMENT_ROUTE } from "../utils/consts";
import { addRemoveLike, fetchLikes } from "../http/privateAPI";


const OneCard = observer(({ el }) => {
    const { user } = useContext(Context);
    const { authStore } = useContext(Context);
    const { announcement } = useContext(Context);
    const navigate = useNavigate()


    let textBtn = "Вподобати";
    let flag = "light";
    const funcLike = () => {
        authStore.likes.map(like => {
            if (like.announcementId === el.id) {
                flag = "danger";
                textBtn = "Додано до  "
            }
        })
    }
    funcLike()

    const addremovelikeCard = async () => {
        await addRemoveLike(el.id);
        await fetchLikes().then((data) => authStore.setLikes(data.rows));
    }

    function press(e) {
        // інформація про подію
        //console.log(e.target.className);
        if (e.target.className === "btnCard d-flex btn btn-danger") return;
        if (e.target.className === "btnCard d-flex btn btn-light") return;
        if (e.target.className === "addLike") return;
        return navigate(ANNOUNCEMENT_ROUTE + '/' + el.id)
    }


    let lessonCard = "";
    function leCard() {
        announcement.lessons.map((l) => {
            if (el.lessonId === l.id) lessonCard = l.name;
        })
    }
    leCard();

    let cityCard = "";
    function ciCard() {
        announcement.cities.map((c) => {
            if (el.cityId === c.id) cityCard = c.name;
        })
    }
    ciCard();



    return (
        <Col md={6} className="mt-4 "   >
            <Card onClick={(e) => press(e)}
                className="card d-flex" style={{ height: 220, cursor: 'pointer' }}>
                <Form className="d-flex ">
                    <Image width={200} height={200} src={process.env.REACT_APP_API_URL + el.img}></Image>
                    <Col className="rightCard d-flex">
                        <div className="name"
                        >{el.name}</div>
                        <div>{lessonCard}</div>
                        <div>Місто: {cityCard}  </div>
                        <div>{el.price} грн.</div>
                        {user.isAuth ?
                            <Button className="btnCard d-flex" variant={flag}
                                onClick={() => addremovelikeCard()}
                            >{textBtn} <img className="addLike" src={heart} /></Button>
                            :
                            <p></p>}
                    </Col>
                </Form>
            </Card>

        </Col >
    )
})

export default OneCard;