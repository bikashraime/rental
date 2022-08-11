import React from 'react'
import '../user_setting.css'

function UserDetail() {
    return (
        <>
            <div className='my-detail'>
                <div className="title">
                    <span style={{ fontSize: '1.6rem', fontWeight: '500' }}>My Details</span>
                </div>
                <div className='my-detail-form' style={{ marginTop: '1rem' }}>
                    <form action="">
                        <div className='form-component'>
                            <div className="form-title">
                                <label htmlFor="first" >First Name</label>
                            </div>
                            <div className="form-input">
                                <input id='first' type="text" value='Sulav' />
                            </div>
                        </div>
                        <div className='form-component'>
                            <div className="form-title">
                                <label htmlFor="second">Last Name</label><br />
                            </div>
                            <div className="form-input">
                                <input id='second' type="text" value='Rents' />
                            </div>
                        </div>
                        <div className='form-component'>
                            <div className="form-title">
                                <label htmlFor="phone">Phone Number</label><br />
                            </div>
                            <div className="form-input">
                                <input id='phone' type="text" value='9800000000' />
                            </div>
                        </div>
                        <div className='form-component'>
                            <div className="form-title">
                                <label htmlFor="email">Email:</label><br />
                            </div>
                            <div className="form-input">
                                <input id='email' type="text" value='abc@xyz.com' />
                            </div>
                        </div>
                        <div className='form-component'>
                            <div className="form-title">
                                <label htmlFor="address">Address</label><br />
                            </div>
                            <div className="form-input">
                                <input id='address' type="text" value='Biratnagar' />
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

export default UserDetail