import React from 'react'
import './property_list.css'
import building from '../../assets/images/property_list_background.png'

export default function PropertyList() {
    return (
        <div className="property-list">
            <div className="container">
                <img className='property-list-background' src={building} alt="" />
                <div className="property-list-slogan">
                    <div>LIST YOUR ADVERTISMENT</div>
                    <div>HERE FOR FREE</div>
                    <p>Fill your property detail and post for free</p>
                </div>
                <button className='property-list-button'>Post here</button>
            </div>
        </div>
    )
}
