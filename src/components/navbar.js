import React from 'react'
import logo from '../assets/images/logo.png';
import { Container, Image, Navbar, Nav } from 'react-bootstrap'

import { BrowserRouter as Router, Link } from 'react-router-dom'


export const NavigationBar = (props) => {
    return (
        <>
            <Navbar className='sticky-navbar' sticky={true} collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#313539" }}>
                <Container>
                    <Navbar.Brand href="#">
                        <img src={logo} height={60} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className=' flex-md-row-reverse'>

                        <Nav>
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link onClick={() => { props.onNav("categories") }}>Categories</Nav.Link>
                            <Link to='/about'>About us</Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}