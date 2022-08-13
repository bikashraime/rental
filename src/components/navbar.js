import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logo.png';
import { Container, Navbar, Nav, Button, Form, NavDropdown } from 'react-bootstrap'

import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { scrollContactWithOffset } from '../utils/scroll_offset';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

export const NavigationBar = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [loggedIn, setLoggedIn] = useState(true)

    const logoDesign = {
        filter: 'invert(100%)',
        // border: '1px solid red',
        height: '6rem',
        margin: '-1rem'
    }

    const collapseMend = {
        // backgroundColor: "green",
        maxWidth: "fit-content"
    }

    return (
        <div className='sticky-navbar'>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#F4F4F4' }}>
                <Container >
                    <Navbar.Brand >
                        <Link to='/'><img src={logo} style={logoDesign} /></Link>
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
                            <NavLink
                                title='Home'
                                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                                exact to='/'
                                onClick={() => setToggleMenu(false)}
                            >
                                <i class="fa-solid fa-house"></i>
                            </NavLink>
                            <div title='Categories'>
                                <NavDropdown title={<i class="fa-solid fa-bars"></i>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Room</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Flat & Apartments</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">House</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Shops</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Lands</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Factory</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Park</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Cafeteria</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Hotel</NavDropdown.Item>
                                </NavDropdown>
                            </div>

                            <NavLink
                                title='About Us'
                                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} 
                                to='/aboutus'
                                onClick={() => { setToggleMenu(false) }}
                            >
                                <i class="fa-solid fa-circle-question"></i>
                            </NavLink>
                            <HashLink
                                title='Contact'
                                className="nav-link" 
                                to='/#contact'
                                smooth
                                onClick={() => { setToggleMenu(false) }}
                                scroll={(el) => scrollContactWithOffset(el)}
                            >
                                <i class="fa-solid fa-address-book"></i>
                            </HashLink>
                            <NavLink  
                                className="signup" 
                                to='/signup'
                                style={loggedIn? {display:'none'}:{display:'block'}}
                             >
                                Signup / Login
                             </NavLink>

                            <NavDropdown
                                title={
                                    <span style={{ color: 'Black', fontWeight: '500', fontSize: '1.2rem' }}>
                                        User
                                    </span>
                                }
                                id="basic-nav-dropdown"
                                style={loggedIn? {display:'block'}:{display:'none'}}
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    <Link to='/profile' style={{ textDecoration: 'none', color: 'inherit' }}>Profile</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">
                                    <i class="fa-solid fa-gear"></i>
                                    <span style={{ marginLeft: '.3rem' }}>
                                        <Link to='/setting' style={{ textDecoration: 'none', color: 'inherit' }}>Setting</Link>
                                    </span>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                    <NavLink 
                                        to='/' 
                                        onClick={()=>setLoggedIn(false)}
                                        style={{ marginLeft: '.3rem', textDecoration:'none', color:'inherit'}}
                                    >
                                        Log out
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}