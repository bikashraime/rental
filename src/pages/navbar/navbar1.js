import './navbar1.css'
import logo from '../../assets/images/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import UserDropdown from '../user_dropdown/user_dropdown'
import { findAllByTestId } from '@testing-library/react'
import { useEffect, useRef } from 'react'

export default function Navbar1() {

    //Menu bar toggle
    const [menu, setMenu] = useState(true);
    const toggleMenu = () => {
        setMenu(!menu);
    }
    const widthResponse = () => {
        if (window.innerWidth > 1010) {
            setMenu(true)
            return
        }
        setMenu(false)
    }
    useEffect(() => {
        widthResponse();
    }, [])
    useEffect(() => {
        window.addEventListener('resize', widthResponse)
        console.log(window.innerWidth)
        document.addEventListener('click', handleClickOutsideNavbarUser, true)
        document.addEventListener('click', handleClickOutside, true)

    })

    //Outside click handle for minimized menu
    const refOne = useRef(null)
    const handleClickOutside = (e) => {
        if (!refOne.current.contains(e.target) && window.innerWidth < 1010) {
            setMenu(false)
        }
    }


    //Users dropdown toggle
    const [navbarUser, setNavbarUser] = useState(false)
    const handleClickOnNavbarUser = () => {
        setNavbarUser(!navbarUser)
    }
    const refTwo = useRef(null)
    const handleClickOutsideNavbarUser = (e) => {
        if (!refTwo.current.contains(e.target)) {
            setNavbarUser(false)
        }
    }


    //test of login state while development
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
                <div>

                    <div className="container navbar-content">
                        <Link to='/'><img src={logo} className='navbar-content-logo' /></Link>

                        <div ref={refOne} onClick={() => widthResponse()} className="navbar-menu" style={menu ? { display: 'flex' } : { display: 'none' }}>
                            <Link to='/' className='navbar-home'>HOME</Link>
                            <Link to='/aboutus' className='navbar-home '>ABOUT US</Link>
                            <HashLink to='/#contact' className='navbar-home ' >CONTACT US</HashLink>
                            <button className='navbar-postad ' >Post Ad</button>
                        </div>


                        <div className='navbar-non-minimize'>
                            <Link to='/signup' className='navbar-signup' style={!loggedin ? { display: 'inherit' } : { display: 'none' }}>Signup / Login</Link>
                            <div ref={refTwo} className='navbar-user' style={loggedin ? { display: 'inherit' } : { display: 'none' }}>
                                <button className='navbar-user-button' onClick={handleClickOnNavbarUser} >
                                    <div className="navbar-user-icon">
                                        <i class="fa-sharp fa-solid fa-user fa-xl"></i>
                                    </div>
                                    <div className='navbar-user-name'>User</div>
                                </button>
                                <div onClick={()=>setNavbarUser(false)} className='navbar-user-dropdown' style={{ display: navbarUser ? 'block' : 'none' }}>
                                    <UserDropdown />
                                </div>
                            </div>
                            <button className='navbar-bar' onClick={toggleMenu}><i class="fa-solid fa-bars fa-2x"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 