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

import './navbar.css'

const NavBar = observer(() => {
    const { user } = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to='/' style={{ color: 'white' }} >
                    Tutors
                </NavLink>
                <NavDropdown style={{ color: 'white' }} title="Авторизація" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/login">
                        Ввійти
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/registration">
                        Зареєструватися
                    </NavDropdown.Item>
                </NavDropdown>

            </Container>
        </Navbar>
    )
})

export default NavBar;