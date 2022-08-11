import React from 'react'
import '../user_setting.css'

function UserPassword() {
    return (
        <>
            <div className='my-detail'>
                <div className="title">
                    <span style={{ fontSize: '1.6rem', fontWeight: '500' }}>Change Password</span>
                </div>
                <div className='my-detail-form' style={{ marginTop: '1rem' }}>
                    <form action="">
                        <div className='form-component'>
                            <div className="form-title">
                                <label htmlFor="old" >Old password</label>
                            </div>
                            <div className="form-input">
                                <input id='old' type="password"/>
                            </div>
                        </div>
                        <div className='form-component'>
                            <div className="form-title">
                                <label htmlFor="new">New password</label><br />
                            </div>
                            <div className="form-input">
                                <input id='new' type="password"  />
                            </div>
                        </div>
                        <div className='form-component'>
                            <div className="form-title">
                                <label htmlFor="confirm">Confirm new password</label><br />
                            </div>
                            <div className="form-input">
                                <input id='confirm' type="password" />
                            </div>
                        </div>
                       
                        <div className="form-button">
                            <button className='submit-button' type='submit'>Save Changes</button>
                            <button>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default UserPassword