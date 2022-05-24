import React from 'react'
import css from './Navbar.module.css'
import bar from '../Images/bar.svg'
import logo from '../../assets/images/logo.png';
import { Container, Image, Navbar, Nav } from 'react-bootstrap'

export const NavigationBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div className={css.main}>
        <div className={css.insideMain}>
          <div className={css.logo}>
            <img src={logo} height={200} width={400} />
          </div>
          <label htmlFor={css.click}>
            <img src={bar} />
          </label>
          <input type="checkbox" id={css.click} />
          <div className={css.option}>
            <div>Home</div>
            <div>Categories</div>
            <div>About us</div>
            <div>Contact</div>
          </div>

        </div>
      </div> */}
    </>
  )
}