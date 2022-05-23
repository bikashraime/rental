import React from 'react'
import css from './Footer.module.css'
import phone from '../Images/phone.svg'
import email from '../Images/email.svg'
import companyLogo from './Footer images/companyLogo.png'

function Footer() {
    return (
        <div className={css.main}>
            <div className={css.container}>
                <div className={css.logo}>
                    <img src={companyLogo} alt="" />
                </div>
                <hr />
                <div className={css.quickLink}>
                    <span className={css.title}>QUICK LINK</span>
                    <a href=""><span>Home</span></a>
                    <a href=""><span>Categories</span></a>
                    <a href=""><span>About us</span></a>
                    <a href=""><span>Contact us</span></a>
                </div>
                <hr />
                <div className={css.contact}>
                    <div className={css.title}>CONTACT</div>
                    <div className={css.phone}>
                        <img src={phone} />
                        <span>1234567890</span>
                    </div>
                    <div className={css.email}>
                        <img src={email} />
                        <span>abcdef@gmail.com</span>
                    </div>
                    <div>
                        <span>Biratnagar, Nepal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer