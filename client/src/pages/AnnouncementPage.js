import React, { useEffect, useState, useContext } from 'react';
import { Context } from "../index";
import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import { observer } from "mobx-react-lite";
import heart from '../set/heart-fill.svg'
import { fetchOneAnnouncement, fetchLessons, fetchCities } from '../http/announcementAPI';
import { addRemoveLike, fetchLikes } from "../http/privateAPI";
import '../components/css/announcementpage.css'
import FooterComponent from '../components/FooterComponent';
import Maps from '../components/Maps';


const AnnouncementPage = observer(() => {
    const [oneAnnouncement, setOneAnnouncement] = useState({ info: [] })
    const { user } = useContext(Context);
    const { authStore } = useContext(Context);
    const { announcement } = useContext(Context);
    const { id } = useParams()


    useEffect(() => {
        fetchOneAnnouncement(id).then((data) => setOneAnnouncement(data))
        fetchLessons().then((data) => announcement.setLessons(data));
        fetchCities().then((data) => announcement.setCities(data));
    }, [])


    const addremovelikeCard = async () => {
        await addRemoveLike(oneAnnouncement.id);
        await fetchLikes().then((data) => authStore.setLikes(data.rows));
    }


    console.log(oneAnnouncement);

    let textBtn = "Вподобати";
    let flag = "light";
    const funcLike = () => {
        authStore.likes.map(like => {
            if (like.announcementId == oneAnnouncement.id) {
                flag = "danger";
                textBtn = "Додано до  "
            }
        })
    }
    funcLike()


    let lessonCard = "";
    function leCard() {
        announcement.lessons.map((l) => {
            if (oneAnnouncement.lessonId === l.id) lessonCard = l.name;
        })
    }
    leCard();

    let cityCard = "";
    function ciCard() {
        announcement.cities.map((c) => {
            if (oneAnnouncement.cityId === c.id) cityCard = c.name;
        })
    }
    ciCard();




    return (
        <>
            <Container className="mt-5" >
                <Row className='d-flex' style={{ border: '5px solid lightgray' }}>
                    <Col md={4}>
                        <Card
                            className="cardAnnPage d-flex flex-column align-items-center justify-content-around"
                            style={{ width: 300, height: 300, }}
                        >
                            <Image className='pageImg' src={process.env.REACT_APP_API_URL + oneAnnouncement.img} />
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card
                            className="cardAnnPage d-flex flex-column align-items-center justify-content-around"
                            style={{ width: 300, height: 300, fontSize: 20, }}
                        >
                            <Form className='briefinfo'> {oneAnnouncement.briefinfo}</Form>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card
                            className="cardAnnPage d-flex flex-column align-items-center justify-content-around"
                            style={{ width: 300, height: 300, fontSize: 32, }}
                        >
                            <h2>{oneAnnouncement.name}</h2>
                            <h5>{lessonCard}</h5>
                            <h5>Місто:  {cityCard} </h5>
                            <h3>Ціна: {oneAnnouncement.price} грн.</h3>
                            {user.isAuth ?
                                <Button className="btnCard m-auto" variant={flag}
                                    onClick={() => addremovelikeCard()}
                                >{textBtn}  <img className="addLike" src={heart} /></Button>
                                :
                                <p></p>}
                        </Card>
                    </Col>
                </Row>
                <Row className="d-flex flex-column m-3">
                    <h1>Додаткова інформація</h1>
                    {oneAnnouncement.info.map((info, index) =>
                        <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                            {info.title}: {info.description}
                        </Row>
                    )}
                </Row>

                <Row>
                    <Maps bool={true} />
                </Row>
            </Container>
            <FooterComponent />
        </>

    );
})

export default AnnouncementPage;