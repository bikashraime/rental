import React from 'react'
import css from './Navbar.module.css'
import bar from '../Images/bar.svg'

function Navbar() {
  return (
    <>
      <div className={css.main}>
        <div className={css.insideMain}>
          <div className={css.logo}>
            <span>shulabhrents</span>
          </div>
          <label htmlFor={css.click}>
            <img src={bar}  />
          </label>
          <input type="checkbox" id={css.click} />
          <div className={css.option}>
            <div>Home</div>
            <div>Categories</div>
            <div>About us</div>
            <div>Contact</div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar