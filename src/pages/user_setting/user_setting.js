import React from 'react'
import { useState } from 'react'
import UserDetail from './sections/user_detail'
import UserPassword from './sections/user_password'
import './user_setting.css'

function Setting() {

    const [option, setOption] = useState(1)

    let setup = option == 1? <UserDetail/>
                        : <UserPassword/>

    return (
        <div className="user-setting">
            <div className="container">
                <div className="setting-title" >
                    <span style={{ fontSize: '1.6rem', fontWeight: '500' }}>Setting</span>
                    <div style={{ borderBottom: '1px solid #bebebe' }}></div>
                    <div>
                        <i class="fa-solid fa-person"></i>
                        <span onClick={()=>setOption(1)}>My Detail</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-key"></i>
                        <span onClick={()=>setOption(2)}>Password</span>
                    </div>
                </div>

                <div className="user-content">
                    {setup}
                </div>
            </div>
        </div>
    )
}

export default Setting