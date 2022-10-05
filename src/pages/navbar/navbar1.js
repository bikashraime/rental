import './navbar1.css'
import logo from '../../assets/images/logo.png'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import UserDropdown from '../user_dropdown/user_dropdown'
import { findAllByTestId } from '@testing-library/react'
import { useEffect, useRef } from 'react'
import CategoryDropdown from './category_dropdown/category_dropdown'
import Snackbar from '../../components/snackbar/snackbar'

export default function Navbar1() {

    //Menu bar toggle
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    }
    const widthResponse = () => {
        console.log("Width response is running")
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
        document.addEventListener('click', handleClickOutsideNavbarUser, true)
        document.addEventListener('click', handleClickOutside, true)
        document.addEventListener('click', handleClickOutsideCategory, true)
    })

    //Overlay click handle for minimized menu
    const refOne = useRef(null)
    const handleClickOutside = (e) => {
        if (!refOne.current.contains(e.target) && window.innerWidth < 1010) {
            setMenu(false)
        }
    }

    //Category dropdwon toggle
    const [categoryDropdown, setCategoryDropdown] = useState(false)
    const refThree = useRef(null)
    const handleClickOutsideCategory = (e) => {
        if (!refThree.current.contains(e.target)) {
            setCategoryDropdown(false)
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
        <>
            {toast && <Snackbar />}
            <div className="navbar-main" >
                <div style={{ position: 'absolute' }}>
                    <button onClick={loginToggle}>Login test:</button>
                    {loggedin ? 'in' : 'out'}

                </div>
                <div>
                    <div className="container navbar-content">
                        <Link to='/'><img src={logo} className='navbar-content-logo' /></Link>




                        <div ref={refOne} className="navbar-menu" style={menu ? { display: 'flex' } : { display: 'none' }}>
                            <Link to='/' className='navbar-home'  onClick={() => widthResponse()}>HOME</Link>
                            <div ref={refThree} style={{ position: 'relative' }} >
                                <button onClick={() => setCategoryDropdown(!categoryDropdown)} className='navbar-home'>CATEGORY</button>
                                <div
                                    className='navbar-category-dropdown slideDown'
                                    style={categoryDropdown ? { display: 'block' } : { display: 'none' }}
                                    onClick={() => setCategoryDropdown(false)}
                                >
                                    <CategoryDropdown  handleMenu={widthResponse}/>
                                </div>
                            </div>
                            <Link to='/aboutus' className='navbar-home'  onClick={() => widthResponse()}>ABOUT US</Link>
                            <HashLink to='/#contact' className='navbar-home '  onClick={() => widthResponse()}>CONTACT US</HashLink>
                        </div>





                        <div className='navbar-non-minimize'>
                            <Link to='/signup' className='navbar-signup' style={!loggedin ? { display: 'inherit' } : { display: 'none' }}>Signup / Login</Link>
                            <button className='navbar-postad ' style={loggedin ? { display: 'inherit' } : { display: 'none' }} onClick={toasting}>Post Ad</button>
                            <div ref={refTwo} className='navbar-user' style={loggedin ? { display: 'inherit' } : { display: 'none' }}>
                                <button className='navbar-user-button' onClick={handleClickOnNavbarUser} >
                                    <div className="navbar-user-icon">
                                        <i class="fa-sharp fa-solid fa-user fa-xl"></i>
                                    </div>
                                    <div className='navbar-user-name'>User</div>
                                </button>
                                <div onClick={() => setNavbarUser(false)} className='navbar-user-dropdown slideDown' style={{ display: navbarUser ? 'block' : 'none' }}>
                                    <UserDropdown/>
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