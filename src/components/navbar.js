import React from 'react'
import logo from '../assets/images/logo.png';
import { Container, Image, Navbar, Nav } from 'react-bootstrap'

import { BrowserRouter as Router, Link } from 'react-router-dom'


export const NavigationBar = (props) => {

    return (
        <>
            <Navbar className='sticky-navbar' sticky='top' collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#313539" }}>
                <Container>
                    <Navbar.Brand href="#">
                        <img src={logo} height={60} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className=' flex-md-row-reverse'>

                        <Nav>
                            <Link className="nav-link" to='/'>Home</Link>
                            <Link className="nav-link" to='/categories'>Categories</Link>
                            <Link className="nav-link" to='/about'>About us</Link>
                            <Link className="nav-link" to='/#contact'>Contact</Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}