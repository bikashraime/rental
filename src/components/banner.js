import React, { useState } from 'react'
import search from '../assets/svg/search.svg';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


export const SearchBanner = () => {
    const [search, setSearch] = useState("");

    const navigate = useNavigate()
    return (
        <div className=" banner-bg d-flex align-items-center  justify-content-center">
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
        </div >
    )
}

