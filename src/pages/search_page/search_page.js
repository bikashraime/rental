import React from 'react'
import './search_page.css'

export default function SearchPage() {
    return (
        <div className='search-area'>
            <div className="container">
                <div className="search-area-slogan">
                    <div className="search-area-slogan-big">
                        Find best residence
                        <br />
                        for you
                    </div>
                    <div className="search-area-slogan-small">
                        Your gateway to your dream home
                    </div>
                </div>
                <div className="search-area-input">
                    <input type="text" placeholder='Enter address or property ID' />
                    <button><i class="fa-solid fa-magnifying-glass fa-xl"></i></button>
                </div>
            </div>
        </div>
    )
}
