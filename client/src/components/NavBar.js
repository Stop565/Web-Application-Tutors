import React, { useContext } from "react";
import { Context } from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom";

import './css/navbar.css'

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();


    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav onClick={() => navigate("/")} style={{ color: 'white' }} >
                    Tutors
                </Nav>
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
                    user.isAuth && user.isRole === "USER" && <Nav  >
                        <Button className="btn" variant="outline-light" onClick={() => navigate("/myannouncement")} >Мої оголошення</Button>
                        <Button className="btn" variant={"outline-light"} onClick={() => navigate("/likes")}>Likes</Button>
                        <Button className="btn" variant={"outline-light"} onClick={() => navigate("/create")} >Створити оголшення</Button>
                        <Button className="btn" variant={"outline-light"} onClick={() => logOut()}  >Вийти</Button>

                    </Nav>
                }

                {
                    user.isAuth && user.isRole === "ADMIN" && <Nav  >
                        <Button className="btn" variant="outline-light" onClick={() => navigate("/")} >Мої оголошення</Button>
                        <Button className="btn" variant="outline-light" onClick={() => navigate("/likes")}>Likes</Button>
                        <Button className="btn" variant="outline-light" onClick={() => logOut()} >Вийти</Button>
                        <NavDropdown style={{ color: 'white' }} title=" Додати..." id="collasible-nav-dropdown">
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
                    </Nav>
                }





            </Container>
        </Navbar >
    )
})

export default NavBar;