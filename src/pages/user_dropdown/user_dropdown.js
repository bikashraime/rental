import './user_dropdown.css'

import React from 'react'
import { Link } from 'react-router-dom'

function UserDropdown() {
    return (
        <div className='d-flex justify-content-center'>
            <div className="user-dropdown">



                <div className="user-dropdown-name">
                    <div className="user-dropdown-name-icon">
                        <i class="fa-sharp fa-solid fa-user fa-xl"></i>
                    </div>
                    <span>User's fullname</span>
                </div>
                <div className="user-dropdown-setting">
                    <div className="user-dropdown-icon">
                        <i class="fa-solid fa-gear fa-xl"></i>
                    </div>
                    <span>Setting</span>
                    <i class="fa-sharp fa-solid fa-angle-right fa-lg"></i>
                </div>
                <div className="user-dropdown-logout">
                    <div className='user-dropdown-icon'>
                        <i class="fa-solid fa-arrow-right-from-bracket fa-xl"></i>
                    </div>
                    <span>Log Out</span>
                    <i class="fa-sharp fa-solid fa-angle-right fa-lg"></i>
                </div>




            </div>
        </div>
    )
}

export default UserDropdown