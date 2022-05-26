import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../assets/images/logo.png';
import email from '../assets/icons/email.png';
import phone from '../assets/icons/phone.png';
// import phone from '../Images/phone.svg'
// import email from '../Images/email.svg'
// import companyLogo from './Footer images/companyLogo.png'

function Footer() {
    return (
        <div className='py-3' style={{ backgroundColor: "#313539" }} >

            <Container style={{ paddingTop: "30px", paddingBottom: "30px" }} >
                <div className='d-flex'>
                    <Row>
                        <Col className='d-flex' sm={6} md={3} xs={12}>
                            <img className='align-self-sm-center' src={logo} alt="logo" style={{ width: "100%" }} style={{ maxWidth: 200 }} />
                        </Col>
                        <Col className="text-white" sm={9} md={8} xs={12}>
                            <Row>
                                <Col>
                                    <div className='px-3 mx-3'>
                                        <span className=''>QUICK LINK</span>
                                        <a href=""><span>Home</span></a>
                                        <a href=""><span>Categories</span></a>
                                        <a href=""><span>About us</span></a>
                                        <a href=""><span>Contact us</span></a>
                                    </div>

                                </Col>

                                <Col>
                                    <div className='px-3 mx-3'>
                                        <div className=''>CONTACT</div>
                                        <div className=''>
                                            <img src={phone} width={20} />
                                            <span className='mx-2'>1234567890</span>
                                        </div>
                                        <div className=''>
                                            <img src={email} width={20} color="#fff" />
                                            <span className='mx-2'>abcdef@gmail.com</span>
                                        </div>
                                        <div>
                                            <span>Biratnagar, Nepal</span>
                                        </div>
                                    </div>

                                </Col>

                            </Row>
                        </Col>

                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Footer