import React from "react";
import { Container, Form, Card } from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import { NavLink, useLocation } from "react-router-dom";


const Auth = () => {
    const location = useLocation();
    //console.log(location)
    const isLogin = location.pathname === '/login'

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }} >
            <Card style={{ width: 600 }} className="p-5" >
                {
                    isLogin ?
                        <h2 className="m-auto">Авторизація</h2>
                        :
                        <h2 className="m-auto">Реєстрація</h2>
                }
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть email..." />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть Пароль..." />
                    <Form className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {
                            isLogin ?
                                <div>
                                    Немає аккаунта?<NavLink to="/registration">Зареєструйся!</NavLink>
                                </div>
                                :
                                <div>
                                    Є аккаунт?<NavLink to="/login">Ввійди!</NavLink>
                                </div>
                        }

                        <Button variant={"outline-success"}>
                            {isLogin ? "Ввійти" : "Зареєструватися"}
                        </Button>
                    </Form>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth;