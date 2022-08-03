import React from 'react'
import '../assets/styles/Topbar.css'

function Topbar() {
    return (
        <div className='topbar d-flex justify-content-center align-items-center'>
            <div className="container d-flex justify-content-between">
                <div className="topbar-contact d-flex justify-content">
                    <div className='d-flex align-items-center'>
                        <i class="fa-regular fa-envelope"></i>
                        <span>abcde@gmail.com</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <i class="fa-solid fa-phone"></i>
                        <span>9810000000</span>
                    </div>
                </div>
                <div className="topbar-logos d-flex justify-content-center align-items-center">
                    <a href="https://www.facebook.com" target='_blank'>
                        <i class="fa-brands fa-square-facebook fa-xl" style={{ color: '#4267B2' }}></i>
                    </a>
                    <a href="https://www.instagram.com" target='_blank'>
                        <i class="fa-brands fa-square-instagram fa-xl" style={{ color: '#DC3035' }}></i>
                    </a>
                    <a href="https://www.twitter.com" target='_blank'>
                        <i class="fa-brands fa-twitter fa-xl" style={{ color: '#1DA1F2' }}></i>
                    </a>
                    <a href="https://www.youtube.com" target='_blank'>
                        <i class="fa-brands fa-youtube fa-xl" style={{ color: '#FF0000' }}></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Topbar