import React, { useState } from 'react';
import { Container, Form, Card, Button } from 'react-bootstrap';
import { createCity, createLesson } from '../http/privateAPI';



const FooterComponent1 = () => {
    const [newcity, setNewcity] = useState('');
    const [newlesson, setNewlesson] = useState('');

    const addCity = () => {
        createCity({ name: newcity }).then(() => { setNewcity('') })
    }

    const addLesson = () => {
        createLesson({ name: newlesson }).then(() => { setNewlesson('') })
    }


    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Card className="m-4 ">
                <Card md={6} className="m-4 " style={{ width: 600, }} >
                    <Form>
                        <Form.Control
                            value={newcity}
                            onChange={e => setNewcity(e.target.value)}
                            placeholder={"Назва міста..."}
                        />
                        <Button className='mt-4' variant="outline-success"
                            onClick={() => addCity()}
                        >Додати нове місто</Button>
                    </Form>
                </Card>

                <Card md={6} className="m-4 " style={{ width: 600, }} >
                    <Form>
                        <Form.Control
                            value={newlesson}
                            onChange={e => setNewlesson(e.target.value)}
                            placeholder={"Назва предмета..."}
                        />
                        <Button className='mt-4' variant="outline-success"
                            onClick={() => addLesson()}
                        >Додати новий предмет</Button>
                    </Form>
                </Card>
            </Card>
        </Container>
    )
}

export default FooterComponent1;