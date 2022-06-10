import React, { useState } from 'react'
import logo from '../assets/images/logo.png';
import { Container, Image, Navbar, Nav } from 'react-bootstrap'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';



export const NavigationBar = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <>
            <Navbar className='sticky-navbar' sticky='top' expanded={toggleMenu} collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#313539" }}>
                <Container>
                    <Navbar.Brand >
                        <Link to='/'><img src={logo} height={60} /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setToggleMenu(true)} />
                    <Navbar.Collapse id="responsive-navbar-nav" className=' flex-md-row-reverse'>

                        <Nav >
                            <Link className="nav-link" to='/' onClick={() => setToggleMenu(false)}>Home</Link>
                            <Link className="nav-link" to='/categories' onClick={() => setToggleMenu(false)} >Categories</Link>
                            <Link className="nav-link" to='/about' onClick={() => setToggleMenu(false)}>About us</Link>
                            <HashLink className="nav-link" to='/#contact' smooth onClick={() => setToggleMenu(false)}
                                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end', })}
                            >Contact us</HashLink>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}