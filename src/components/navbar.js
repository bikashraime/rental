import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logo.png';
import { Container, Navbar, Nav, Button } from 'react-bootstrap'

import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { scrollContactWithOffset } from '../utils/scroll_offset';

export const NavigationBar = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false)

    let logoDesign ={
        filter: 'invert(100%)',
        height: '60px'
    }

    return (
        <div className='sticky-navbar'>
            <Navbar collapseOnSelect expand="lg"  style={{backgroundColor: '#F4F4F4'}}>
                <Container>
                    <Navbar.Brand >
                        <Link to='/'><img src={logo} style={logoDesign} /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setToggleMenu(!toggleMenu)} />
                    <Navbar.Collapse id="responsive-navbar-nav" className=' flex-md-row-reverse'>
                        <Nav>
                            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} exact to='/' onClick={() => setToggleMenu(false)}>Home</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to='/categories' onClick={() => { setToggleMenu(false) }} >Categories</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to='/aboutus' onClick={() => { setToggleMenu(false) }}>About us</NavLink>
                            <HashLink className="nav-link" to='/#contact' smooth onClick={() => { setToggleMenu(false) }}
                                scroll={(el) => scrollContactWithOffset(el)}
                            >Contact us</HashLink>
                            <NavLink className="signup" to='/signup'>Signup/Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}