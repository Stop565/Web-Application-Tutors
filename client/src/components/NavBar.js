import React, { useContext, useState } from "react";
import { Context } from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useLocation } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom";

import './css/navbar.css'
import { MAIN_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const { announcement } = useContext(Context);

    const navigate = useNavigate();
    const location = useLocation();

    const isMainPage = location.pathname === MAIN_ROUTE;

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
        navigate("/");
    }


    return (
        <Navbar bg="dark" variant="dark" className="navbar">
            <Container>
                <Navbar.Brand onClick={() => navigate("/")} style={{ color: 'white' }} >
                    Tutors
                </Navbar.Brand>



                {
                    !user.isAuth && <>

                        <NavDropdown className="btn" style={{ color: 'white' }} title="Авторизація" id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate("/login")}>
                                Ввійти
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/registration")}>
                                Зареєструватися
                            </NavDropdown.Item>
                        </NavDropdown>
                    </>
                }

                {
                    user.isAuth && user.isRole === "USER" && <>
                        <Navbar.Collapse   >
                            <Button className="btn" variant="outline-light" onClick={() => navigate("/myannouncement")} >Мої оголошення</Button>
                            <Button className="btn" variant={"outline-light"} onClick={() => navigate("/likes")}>Likes</Button>
                            <Button className="me-2" variant={"outline-light"} onClick={() => navigate("/create")} >Створити оголшення</Button>
                            {isMainPage &&
                                <Form className="d-flex ">
                                    <Form.Control
                                        style={{ width: 300 }}
                                        type="search"
                                        placeholder="Я шукаю..."
                                        aria-label="Search"
                                        onChange={(event) => announcement.setInputSearch(event.target.value)}
                                    />
                                </Form>
                            }
                        </Navbar.Collapse>
                        <Button className="btn" variant={"outline-light"} onClick={() => logOut()}  >Вийти</Button>
                    </>
                }

                {
                    user.isAuth && user.isRole === "ADMIN" && <>
                        <Navbar.Collapse  >
                            <Button className="btn" variant="outline-light" onClick={() => navigate("/myannouncement")} >Мої оголошення</Button>
                            <Button className="btn me-2" variant="outline-light" onClick={() => navigate("/likes")}>Likes</Button>
                            <NavDropdown className="me-4" style={{ color: 'white' }} title=" Додати..." id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={() => navigate("/create")}>
                                    Оголошення
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/admin")}>
                                    Предмет
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/admin")}>
                                    Місто
                                </NavDropdown.Item>
                            </NavDropdown>
                            {isMainPage &&
                                <Form className="d-flex ">
                                    <Form.Control
                                        type="search"
                                        placeholder="Я шукаю..."
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Знайти</Button>
                                </Form>
                            }
                        </Navbar.Collapse>
                        <Button className="btn" variant="outline-light" onClick={() => logOut()} >Вийти</Button>
                    </>
                }





            </Container>
        </Navbar >
    )
})

export default NavBar;