import React from 'react'
import '../assets/styles/Topbar.css'

function Topbar() {
    return (
        <div className='topbar'>
            <div className="container topbar-container">
                <div className="topbar-contact">
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
                    <a title='Facebook' href="https://www.facebook.com" target='_blank'>
                        <i class="fa-brands fa-square-facebook fa-xl" style={{ color: '#677276' }}></i>
                    </a>
                    <a title='Instagram' href="https://www.instagram.com" target='_blank'>
                        <i class="fa-brands fa-square-instagram fa-xl" style={{ color: '#677276' }}></i>
                    </a>
                    <a title='Twitter' href="https://www.twitter.com" target='_blank'>
                        <i class="fa-brands fa-twitter fa-xl" style={{ color: '#677276' }}></i>
                    </a>
                    <a title='Youtube' href="https://www.youtube.com" target='_blank'>
                        <i class="fa-brands fa-youtube fa-xl" style={{ color: '#677276' }}></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Topbar