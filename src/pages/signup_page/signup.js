import React, { useState } from 'react'
import css from './signup.module.css'
import wallpaper from '../../assets/images/banner-1.jpeg'

function SignUpForm(props) {
    return (
        <div  style={props.click? {display: 'block'}:{display: 'none'}}>
            <div className={css.title}>
                <span>Sign Up for Free</span>
            </div>
            <div className={css.name}>
                <input type="text" placeholder='Full Name' />
            </div>
            <div className={css.email}>
                <input type="text" placeholder='Email Address' />
            </div>
            <div className={css.password}>
                <input type="text" placeholder='Set A Password' />
            </div>
            <div className={css.newpassword}>
                <input type='password' placeholder='Reenter The Password' />
            </div>
            <button className={css.getStarted}>GET STARTED</button>
        </div>
    )
}
function LoginForm(props) {
    return (
        <div style={props.click? {display: 'none'}: {display: 'block'}}>
            <div className={css.title}>
                <span>Log In</span>
            </div>
            <div className={css.email}>
                <input type="text" placeholder='Email Address' />
            </div>
            <div className={css.password}>
                <input type="text" placeholder='Enter Password' />
            </div>
            <button className={css.getStarted}>LOG IN</button>
        </div>
    )
}

function Signup() {
    const [click, setClick] = useState(true)

    return (
        <div className={css.form}>
            <div className={css.container}>
                <div className={css.buttonArea}>
                    <button  className={click? css.button1: css.button2} style={{borderRadius: '5px 0 0 5px'}} onClick={()=>setClick(true)}>Sign up</button>
                    <button className={click? css.button2: css.button1} style={{borderRadius: '0 5px 5px 0'}} onClick={()=>setClick(false)}>Log in</button>
                </div>
                <SignUpForm click = {click}/>
                <LoginForm click = {click}/>
            </div>
        </div>
    )
}

export default Signup