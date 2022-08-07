import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logo.png';
import { Container, Navbar, Nav, Button, Form, NavDropdown } from 'react-bootstrap'

import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { scrollContactWithOffset } from '../utils/scroll_offset';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

export const NavigationBar = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const logoDesign = {
        filter: 'invert(100%)',
        // border: '1px solid red',
        height: '6rem', 
        margin: '-1rem'
        
    }

    const collapseMend = {
        // backgroundColor: "green",
        maxWidth: "fit-content",
    }

    const searchButton = {

    }

    return (
        <div className='sticky-navbar'>
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#F4F4F4' }}>
                <Container >
                    <Navbar.Brand >
                        <Link to='/'><img src={logo} style={logoDesign}/></Link>
                    </Navbar.Brand>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-secondary">Search</Button>
                    </Form>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setToggleMenu(!toggleMenu)} />
                    <Navbar.Collapse style={collapseMend}>
                        <Nav>
                            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} exact to='/' onClick={() => setToggleMenu(false)}>Home</NavLink>
                            <NavDropdown title="Categories" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Room</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Flat & Apartments</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">House</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Shops</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Lands</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Factory</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Park</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Cafeteria</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Hotel</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to='/aboutus' onClick={() => { setToggleMenu(false) }}>About us</NavLink>
                            <HashLink className="nav-link" to='/#contact' smooth onClick={() => { setToggleMenu(false) }}
                                scroll={(el) => scrollContactWithOffset(el)}
                            >Contact us</HashLink>
                            <NavLink className="signup" to='/signup'>Signup / Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}