import React, { useState } from 'react'
import search from '../assets/svg/search.svg';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


import phone from '../assets/svg/phone.svg'
import email from '../assets/svg/email.svg'


export const SearchBanner = () => {
    const [search, setSearch] = useState("");

    const navigate = useNavigate()
    return (
        <div className="banner-bg d-flex flex-column align-items-center  justify-content-center">
            
            <Container className='banner-container justify-content-center text-center'>
                <div className='banner-text'>How may I assist you?</div>
                <Container className='mx-3 my-4 d-flex justify-content-center'>
                    <div class="input-group mb-3 bg-white searchContainer">
                        <input type="text" class="form-control no-glow no-border search-padding searchContainer" placeholder="Search...." aria-label="Search...." aria-describedby="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <div className="input-group-append  searchbutton" onClick={() => {
                            if (search != "") navigate('/search/' + search)
                        }}>
                            <button className="btn  border-0 no-glow search-padding ">
                                <img src={search} height={20} />
                            </button>
                        </div>
                    </div>
                </Container>
            </Container>
            <div className='contact-info-searchbar animated fadeIn slideUp'>
                <div className='d-flex contact-info-text  mx-1'>
                    <img src={phone} className="mx-1 d-inline" alt="tel" style={{ width: 15 }} />
                    <span className='d-inline' >123-4567890</span>
                </div>
                <div className='d-flex contact-info-text  mx-1'>
                    <img src={email} className="mx-1 d-inline" alt="mail" style={{ width: 15, marginLeft: 10 }} />
                    <span className='d-line'>abcdefghij@gmail.com</span>
                </div>
            </div>
        </div >
    )
}

