import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../assets/images/logo.png';
import email from '../assets/icons/email.png';
import phone from '../assets/icons/phone.png';
import location from '../assets/icons/locationpoint.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { scrollContactWithOffset } from '../utils/scroll_offset';

function Footer() {
    return (
        <div className='footer py-3' style={{ backgroundColor: "#313539" }} >
            <Container style={{ paddingTop: "30px", paddingBottom: "10px" }} >
                {/* <div className='d-flex'> */}
                <Row>
                    <Col className='d-flex justify-content-center' sm={6} md={4} xs={12} style={{ marginBottom: 30 }}>
                        <img className='align-self-md-center' src={logo} alt="logo" style={{ maxWidth: 200 }} />
                    </Col>
                    <Col className="text-white" sm={9} md={8} xs={12}>
                        <Row>
                            <Col md={6} sm={12} xs={12}>
                                <div className='px-3 mx-3  justify-content-center' style={{ marginBottom: 30 }}>
                                    <div className='footer-title'>QUICK LINK</div>
                                    <div className='footer-page-link'>
                                        <li className='bottom-nab'>
                                            <Link to='/'><span>Home</span></Link>
                                        </li>
                                        <li className='bottom-nab'>
                                            <Link to='/categories'><span>Categories</span></Link>
                                        </li>
                                        <li className='bottom-nab'>
                                            <Link to='/aboutus'><span>About us</span></Link>
                                        </li>
                                        <li className='bottom-nab'>
                                            <HashLink to='/#contact' scroll={(el) => scrollContactWithOffset(el)} ><span>Contact us</span></HashLink>
                                        </li>
                                    </div>

                                </div>
                            </Col>
                            <Col md={6} sm={12} xs={12}>
                                <div className='px-3 mx-3  justify-content-center'>
                                    <div className='footer-title'>CONTACT</div>
                                    <div className='footer-page-link '>
                                        <div className='my-1'>
                                            <img src={phone} width={20} />
                                            <span className='mx-2'>1234567890</span>
                                        </div>
                                        <div className=''>
                                            <img src={email} width={20} color="#fff" />
                                            <span className='mx-2'>abcdef@gmail.com</span>
                                        </div>

                                        <div className='my-1'>
                                            <img src={location} width={20} color="#fff" />
                                            <span className='mx-2'>Biratnagar, Nepal</span>
                                        </div>
                                    </div>
                                </div>

                            </Col>

                        </Row>
                    </Col>

                </Row>
                {/* </div> */}
            </Container>
        </div>
    )
}

export default Footer