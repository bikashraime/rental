import React from 'react'
import { RentalCard } from '../../components/rental_card'
import './profile.css'

function Profile() {
    return (
        <div className="user-profile">
            <div className="container">
                <div className="user-detail" >
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
                    <div  style={{borderBottom: '1px solid #bebebe'}}></div>
                </div>

                <div className="user-content">
                    <div className="title">
                        <span>Advertisement Posted</span>
                    </div>
                    <div className="cards" style={{marginTop: '1rem'}}>
                        <RentalCard/>
                        <RentalCard/>
                        <RentalCard/>
                        <RentalCard/>
                        <RentalCard/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile