import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { scrollContactWithOffset } from '../utils/scroll_offset';
import Snackbar from './snackbar/snackbar';

function Footer() {
    //Toast
    const [toast, setToast] = useState(false)
    function toasting() {
        setToast(true)
        setTimeout(() => {
            setToast(false)
        }, 1000)
    }
    // {toast && <Snackbar />}
    return (
        <div className='footer py-3' style={{ backgroundColor: "#F4F4F4" }} >
            {toast && <Snackbar />}

            <Container style={{ paddingTop: "30px", paddingBottom: "10px" }} >
                <Row>
                    <Col className='d-flex justify-content-center' sm={6} md={4} xs={12} style={{ marginBottom: 30 }}>
                        <img className='align-self-md-center'
                            src={logo} alt="logo"
                            style={{ maxWidth: 200, filter: 'invert(100%)' }}
                        />
                    </Col>
                    <Col sm={9} md={8} xs={12}>
                        <Row>
                            <Col md={6} sm={12} xs={12}>
                                <div className='px-3 mx-3  justify-content-center' style={{ marginBottom: 30 }}>
                                    <div className='footer-title'>QUICK LINK</div>
                                    <div className='footer-page-link'>
                                        <li className='bottom-nab'>
                                            <Link to='/'><span>HOME</span></Link>
                                        </li>
                                        <li className='bottom-nab'>
                                            <Link to='/aboutus'><span>ABOUT US</span></Link>
                                        </li>
                                        <li className='bottom-nab'>
                                            <HashLink to='/#contact' scroll={(el) => scrollContactWithOffset(el)} ><span>CONTACT US</span></HashLink>
                                        </li>
                                        <li className='bottom-nab'>
                                            <Link to='*' onClick={toasting}><span>DEVELOPERS</span></Link>
                                        </li>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} sm={12} xs={12}>
                                <div className='px-3 mx-3  justify-content-center'>
                                    <div className='footer-title'>CONTACT</div>
                                    <div className='footer-page-link '>
                                        <div className='my-1'>
                                            <i class="fa-solid fa-phone"></i>
                                            <span className='mx-2'>1234567890</span>
                                        </div>
                                        <div className='my-1'>
                                            <i class="fa-regular fa-envelope"></i>
                                            <span className='mx-2'>abcdef@gmail.com</span>
                                        </div>
                                        <div className='my-1'>
                                            <i class="fa-solid fa-location-dot"></i>
                                            <span className='mx-2'>Biratnagar, Nepal</span>
                                        </div>

                                        <div className="footer-logo d-flex align-items-center">
                                            <a href="https://www.facebook.com" target='_blank'>
                                                <i class="fa-brands fa-square-facebook fa-xl" style={{ color: '#677276' }}></i>
                                            </a>
                                            <a href="https://www.instagram.com" target='_blank'>
                                                <i class="fa-brands fa-square-instagram fa-xl" style={{ color: '#677276' }}></i>
                                            </a>
                                            <a href="https://www.twitter.com" target='_blank'>
                                                <i class="fa-brands fa-twitter fa-xl" style={{ color: '#677276' }}></i>
                                            </a>
                                            <a href="https://www.youtube.com" target='_blank'>
                                                <i class="fa-brands fa-youtube fa-xl" style={{ color: '#677276' }}></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer