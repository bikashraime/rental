import React from 'react'
import { RentalCard } from '../rental_card/rental_card'
import './profile.css'
import Tom from './tom.jpeg'

function Profile() {
    return (
        <div className="user-profile">
            <div className="container">
                <div className="user-detail" >
                    <span style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>Profile</span>
                    <div style={{ borderBottom: '1px solid #bebebe' , width:'100%'}}></div>
                    <div style={{margin:'1rem 0'}}>
                        <img style={{ borderRadius: '50%', maxWidth: '10rem' }} src={Tom} alt="Profile pic" />
                    </div>
                    <button  class="btn btn-outline-secondary">Edit Pic</button>
                    <div>
                        <i class="fa-solid fa-person"></i>
                        <span>User's name</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-phone"></i>
                        <span>9800000000</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-location-dot"></i>
                        <span>Address</span>
                    </div>
                </div>

                <div className="user-content">
                    <div className="title">
                        <span>Advertisement Posted</span>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className="cards" style={{ margin: '1rem 0' }}>
                        <RentalCard />
                        <RentalCard/>
                        <RentalCard />
                        <RentalCard />
                        <RentalCard />
                    </div>
                </div>
                <div className="user-button">

                </div>
            </div>
        </div>
    )
}

export default Profile