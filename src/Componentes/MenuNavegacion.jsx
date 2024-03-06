import React, { useState } from 'react';
import { Container, Navbar, Nav, Button, Form } from 'react-bootstrap';
import logoTesla from '../Img/logoTesla.png';
import WeatherComponent from './WeatherComponent';

function MenuNavegacion() {
    const [showWeather, setShowWeather] = useState(false);

    const handleShowWeather = () => {
        setShowWeather(true);
    };

    const handleHideWeather = () => {
        setShowWeather(false);
    };

    return (
        <>
            <Navbar bg="black" variant="dark" sticky="top">
                <Container>
                    <Navbar.Collapse className="justify-content-start">
                        <Navbar.Text>
                            <a href="/">
                                {' '}
                                <img src={logoTesla} alt="" className="logoTesla" />{' '}
                            </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="/Shop">Shop</Nav.Link>
                        <Nav.Link href="/aboutUs">About us</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        {showWeather ? (
                            <Button className='btt-generico' variant="dark" onClick={handleHideWeather}>
                                Ocultar Clima
                            </Button>
                        ) : (
                            <Button className='btt-generico' variant="dark" onClick={handleShowWeather}>
                                Mostrar clima
                            </Button>
                        )}
                    </Form>
                </Container>
            </Navbar>
            {showWeather && <WeatherComponent />}
        </>
    );
}

export default MenuNavegacion;
