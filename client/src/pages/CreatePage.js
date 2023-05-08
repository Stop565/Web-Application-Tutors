import React, { useContext, useEffect, useState } from 'react';

import { Button, Dropdown, Form, Row, Col, Container, Card } from "react-bootstrap";
import { Context } from "../index";

import { observer } from "mobx-react-lite";
import { createAnnouncement } from '../http/privateAPI';
import { useNavigate } from "react-router-dom";




const CreatePage = observer(() => {
    const { announcement } = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])
    const [briefinfo, setBriefinfo] = useState('')


    const navigate = useNavigate();


    //  useEffect(() => {
    //     fetchTypes().then(data => announcement.setLessons(data))
    //      fetchBrands().then(data => announcement.setCities(data))
    //  }, [])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addAnnouncement = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('briefinfo', briefinfo)
        formData.append('img', file)
        formData.append('lessonId', announcement.selectedLesson.id)
        formData.append('cityId', announcement.selectedCity.id)
        formData.append('info', JSON.stringify(info))
        //console.log(formData)
        createAnnouncement(formData).then(() => navigate("/"))
    }

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Card md={6} className="m-4 " style={{ width: 600, }} >
                <h1 id="contained-modal-title-vcenter"  >
                    Створення оголошення
                </h1>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{announcement.selectedLesson.name || "Оберіть предмет"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {announcement.lessons.map(lesson =>
                                <Dropdown.Item
                                    onClick={() => announcement.setSelectedLesson(lesson)}
                                    key={lesson.id}
                                >
                                    {lesson.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{announcement.selectedCity.name || "Оберіть місто"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {announcement.cities.map(city =>
                                <Dropdown.Item
                                    onClick={() => announcement.setSelectedCity(city)}
                                    key={city.id}
                                >
                                    {city.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введіть назву оголошення"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введіть ціну за одну лекцію"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr />
                    <Form.Control
                        value={briefinfo}
                        onChange={e => setBriefinfo(e.target.value)}
                        className="mt-3"
                        placeholder="Короткий опис..."
                    />
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                        className="mt-3"

                    >
                        Додати нову інформацію
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введіть назву"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введіть опис"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Видалити
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
                <Form className="mt-4">
                    <Button variant="outline-danger" >Закрити</Button>
                    <Button variant="outline-success" onClick={addAnnouncement}>Створити оголошення</Button>
                </Form>
            </Card >
        </Container >
    );
})

export default CreatePage;