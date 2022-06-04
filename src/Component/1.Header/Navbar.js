import React, { useState } from 'react'
import css from './Navbar.module.css'
import bar from '../Images/bar.svg'
import companyLogo from './companyLogo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  const [toggle, setToggle] = useState(true);

  window.addEventListener("scroll",()=>{
   if(window.scrollY > 0){
     setToggle(false);
   }else{
     setToggle(true);
   }
  })

  return (
    <>
      <div className={toggle? css.main: css.changedMain}>
        <div className={toggle? css.insideMain: css.changedInsideMain}>
          <div className={css.logo}>
            <img src={companyLogo} style={{height: '100%'}} />
            {/* <span>shulabhrents</span> */}
          </div>
          <label htmlFor={css.click}>
            <img className={css.bar} src={bar}  />
          </label>
          <input type="checkbox" id={css.click} />
          <div className={css.option}>
            <Link to='/' style={{textDecoration: 'none'}}><span>Home</span></Link>
            <span>Categories</span>
            <Link to='/about' style={{textDecoration: 'none'}}><span>About us</span></Link>
            <span>Contact</span>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar