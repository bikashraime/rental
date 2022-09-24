import './navbar1.css'
import logo from '../../assets/images/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import UserDropdown from '../user_dropdown/user_dropdown'

export default function Navbar1() {

    const [loggedin, setLoggedin] = useState(true)

    const loginToggle = () => {
        setLoggedin(!loggedin)
    }

    return (
        <>
            <div className="navbar-main" >
                <div style={{ position: 'absolute' }}>
                    <button onClick={loginToggle}>Login test:</button>
                    {loggedin ? 'in' : 'out'}

                </div>
                <div className="container navbar-content">
                    <Link to='/'><img src={logo} className='navbar-content-logo' /></Link>
                    <div className="navbar-menu">
                        <Link to='/' className='navbar-home'>HOME</Link>
                        <Link to='/aboutus' className='navbar-home'>ABOUT US</Link>
                        <HashLink to='/#contact' className='navbar-home'>CONTACT US</HashLink>
                        <button className='navbar-postad'>Post Ad</button>

                        <Link to='/signup' className='navbar-signup' style={!loggedin ? { display: 'inherit' } : { display: 'none' }}>Signup / Login</Link>
                        <div className='navbar-user' style={loggedin ? { display: 'inherit' } : { display: 'none' }}>
                            <button className='navbar-user-button' >
                                <div className="navbar-user-icon">
                                    <i class="fa-sharp fa-solid fa-user fa-xl"></i>
                                </div>
                                <div className='navbar-user-name'>User</div>
                            </button>
                            <div className='navbar-user-dropdown'>
                                <UserDropdown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 