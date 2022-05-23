import css from './TopHeader.module.css'
import login from '../Images/login.svg'
import signup from '../Images/signup.svg'
import phone from '../Images/phone.svg'
import email from '../Images/email.svg'
import bar from '../Images/bar.svg'

function TopHeader() {
  return (
    <div className={css.main}>
        <div className={css.minTopHeader}>
            <label htmlFor={css.click}>
                <img src={bar}/>
            </label>
            <div >CONTACT / SIGN-UP</div>
        </div>
        <input type="checkbox" id={css.click}/>
        <div className={css.insideMain}>
            <div className={css.contact}>
                <div className={css.phone}>
                    <img src={phone} alt="" />
                    <span>1234567890</span>
                </div>
                <div className={css.email}>
                    <img src={email} alt="" />
                    <span>abcdef@gmail.com</span>
                </div>
            </div>
            <div className={css.access}>
                <div className={css.login}>
                    <img src={login} alt="" />
                    <span className={css.loginSpan}>LOGIN</span>
                </div>
                <div className={css.signup}>
                    <img src={signup} alt="" />
                    <span>SIGN UP</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default TopHeader