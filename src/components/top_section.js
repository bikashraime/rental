import login from '../assets/svg/login.svg'
import signup from '../assets/svg/signup.svg'
import phone from '../assets/svg/phone.svg'
import email from '../assets/svg/email.svg'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const TopSection = () => {
    return (
        <Container className='my-2 px-3'>
            <section className='d-flex flex-row justify-content-between align-items-center' style={{ flexDirection: "row" }} >

                <div >
                    <div className='  d-inline topbar-text mx-1'>
                        <img src={phone} className="mx-1 d-inline" alt="tel" style={{ width: 10 }} />
                        <span className='d-inline' >1234567890</span>
                    </div>
                    <div className=' d-inline topbar-text mx-1'>
                        <img src={email} className="mx-1 d-inline" alt="mail" style={{ width: 10, marginLeft: 10 }} />
                        <span className='d-line'>abcdef@gmail.com</span>
                    </div>
                </div>
                <div >
                    <a className='topbar-text mx-1' href="#">
                        <img src={login} height={13} style={{ marginRight: 6 }} />
                        <span >LOGIN</span>
                    </a>
                    <Link className='topbar-text mx-1' to="/signup">
                        <img src={signup} height={13} style={{ marginRight: 6 }} />
                        <span>SIGNUP</span>
                    </Link>
                </div>

            </section >
        </Container >
    )
}