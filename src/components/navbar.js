import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logo.png';
import { Container, Image, Navbar, Nav } from 'react-bootstrap'

import login from '../assets/svg/login.svg'
import signup from '../assets/svg/signup.svg'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { scrollContactWithOffset } from '../utils/scroll_offset';

export const NavigationBar = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className='sticky-navbar'>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand >
                        <Link to='/'><img src={logo} height={60} /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setToggleMenu(!toggleMenu)} />
                    <Navbar.Collapse id="responsive-navbar-nav" className=' flex-md-row-reverse'>

                        <Nav >
                            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} exact to='/' onClick={() => setToggleMenu(false)}>Home</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to='/categories' onClick={() => { setToggleMenu(false) }} >Categories</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to='/aboutus' onClick={() => { setToggleMenu(false) }}>About us</NavLink>
                            <HashLink className="nav-link" to='/#contact' smooth onClick={() => { setToggleMenu(false) }}
                                scroll={(el) => scrollContactWithOffset(el)}
                            >Contact us</HashLink>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}