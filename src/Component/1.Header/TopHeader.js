import css from './TopHeader.module.css'
import login from '../Images/login.svg'
import signup from '../Images/signup.svg'
import phone from '../Images/phone.svg'
import email from '../Images/email.svg'
import bar from '../Images/bar.svg'
import { Container, Col, Row } from 'react-bootstrap'

function TopHeader() {
    return (
        <div className='my-3'>
            <Container className={css.linkedtext} >
                <Row>
                    <Col xs={6} className='px-3'>
                        <div className='d-block'>
                            <img src={phone} className="mx-1 d-inline" alt="tel" style={{ width: 10 }} />
                            <span className='d-inline' >1234567890</span>
                        </div>
                        <div className='d-block'>
                            <img src={email} className="mx-1 d-inline" alt="mail" style={{ width: 10, marginLeft: 10 }} />
                            <span className='d-line'>abcdef@gmail.com</span>
                        </div>
                    </Col>
                    <Col xs={6} className='px-3 float-right align-right text-right'>
                        <a className={css.linkedtext} href="#">

                            <img src={login} height={13} style={{ marginRight: 6 }} />
                            <span >LOGIN</span>

                        </a>
                        <a className={css.linkedtext} href="#">

                            <img src={signup} height={13} style={{ marginRight: 6 }} />
                            <span>SIGNUP</span>

                        </a>

                    </Col>
                </Row>
            </Container >
        </div>
    )
}

export default TopHeader