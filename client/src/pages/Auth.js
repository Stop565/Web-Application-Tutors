import React, { useState, useContext } from "react";
import { Context } from "../index";
import { Container, Form, Card } from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import { NavLink, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { login, registration } from "../http/userAPI";
import { LOGIN_ROUTE, MAIN_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom"



const Auth = observer(() => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { user } = useContext(Context);


    const location = useLocation();
    //console.log(location)
    const isLogin = location.pathname === LOGIN_ROUTE;

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            user.setIsRole(data.role)
            navigate(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Введіть email..."
                    />
                    <Form.Control
                        className="mt-3"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
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

                        <Button variant={"outline-success"} onClick={() => click()}>
                            {isLogin ? "Ввійти" : "Зареєструватися"}
                        </Button>
                    </Form>
                </Form>
            </Card>
        </Container>
    )
})

export default Auth;