import React, { useContext } from "react";
import { Context } from "../index";
import { Button, Card, Col, Form, Image } from "react-bootstrap";
import './css/onecard.css'
import { observer } from "mobx-react-lite";
import heart from '../set/heart-fill.svg'


const OneCard = observer(({ el }) => {
    const { user } = useContext(Context);
    const { authStore } = useContext(Context);

    let textBtn = "Вподобати";
    const funcLike = () => {
        let flag = "light";
        authStore.likes.map(like => {
            if (like.id == el.id) {
                flag = "danger";
                textBtn = "Додано до  "
            }
        })
        return flag
    }


    return (
        <Col md={6} className="mt-4"  >
            <Card className="card" style={{ height: 220, cursor: 'pointer' }}>
                <Form className="d-flex ">
                    <Image width={200} height={200} src={el.img}></Image>
                    <Col className="rightCard">
                        <div className="name">{el.name}</div>
                        <div>Предмет</div>
                        <div>Місто</div>
                        <div>{el.price} грн.</div>
                        {user.isAuth ?
                            <Button className="btnCard"
                                variant={funcLike()}
                            >{textBtn}  <img src={heart} /></Button>
                            :
                            <p></p>}
                    </Col>
                </Form>
            </Card>

        </Col >
    )
})

export default OneCard;