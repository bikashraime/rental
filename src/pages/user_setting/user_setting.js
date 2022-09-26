import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import UserDetail from './sections/user_detail'
import UserPassword from './sections/user_password'
import './user_setting.css'

function Setting() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        console.log("setting page is opened!!!")
    }, [])

    const [option, setOption] = useState(1)

    let setup = option == 1 ? <UserDetail />
        : <UserPassword />

    return (
        <div className="user-setting fadeIn">
            <div className="container">
                <div className="setting-title" >
                    <span style={{ fontSize: '1.6rem', fontWeight: '500' }}>Setting</span>
                    <div style={{ borderBottom: '1px solid #bebebe' }}></div>
                    <div>
                        <i class="fa-solid fa-person"></i>
                        <span onClick={() => setOption(1)}>My Detail</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-key"></i>
                        <span onClick={() => setOption(2)}>Password</span>
                    </div>
                </div>

                <div className="user-content">
                    {setup}
                </div>
            </div>
            <br />
        </div>
    )
}

export default Setting