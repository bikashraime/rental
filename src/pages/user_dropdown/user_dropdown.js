import './user_dropdown.css'

import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function UserDropdown() {
    return (
        <div >
            <div className="user-dropdown">

                <Link to='/profile' className="user-dropdown-name link-css-remover">
                    <div className="user-dropdown-name-icon">
                        <i class="fa-sharp fa-solid fa-user fa-xl"></i>
                    </div>
                    <span>User's fullname</span>
                </Link>
                <Link to='/setting' className="user-dropdown-menu link-css-remover">
                    <div className="user-dropdown-icon">
                        <i class="fa-solid fa-gear fa-xl"></i>
                    </div>
                    <span>Setting</span>
                    <i class="fa-sharp fa-solid fa-angle-right fa-lg"></i>
                </Link>
                {/* <Link to='/aboutus' className="user-dropdown-menu link-css-remover">
                    <div className="user-dropdown-icon">
                        <i class="fa-solid fa-people-group fa-xl"></i>
                    </div>
                    <span>About Us</span>
                    <i class="fa-sharp fa-solid fa-angle-right fa-lg"></i>
                </Link> */}
                {/* <HashLink to='/#contact' className="user-dropdown-menu link-css-remover">
                    <div className="user-dropdown-icon">
                        <i class="fa-solid fa-envelope fa-xl"></i>
                    </div>
                    <span>Contact Us</span>
                    <i class="fa-sharp fa-solid fa-angle-right fa-lg"></i>
                </HashLink> */}
                <Link to='/' className="user-dropdown-menu link-css-remover">
                    <div className='user-dropdown-icon'>
                        <i class="fa-solid fa-arrow-right-from-bracket fa-xl"></i>
                    </div>
                    <span>Log Out</span>
                    <i class="fa-sharp fa-solid fa-angle-right fa-lg"></i>
                </Link>

            </div>
        </div>
    )
}

export default UserDropdown