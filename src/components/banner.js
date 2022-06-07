import React from 'react'
import search from '../assets/svg/search.svg';
import { Col, Container, Row } from 'react-bootstrap';


export const SearchBanner = () => {
    return (
        <div className=" banner-bg d-flex align-items-center  justify-content-center">
            <Container className='justify-content-center text-center'>
                <div className='banner-text'>How may I assist you?</div>
                <Container className='mx-3 my-4 d-flex justify-content-center'>
                    <div class="input-group mb-3 bg-white searchContainer">
                        <input type="text" class="form-control no-glow no-border search-padding searchContainer" placeholder="Search...." aria-label="Search...." aria-describedby="Search" />
                        <div class="input-group-append  searchbutton">
                            <button class="btn  border-0 no-glow search-padding "><img src={search} height={20} /></button>
                        </div>
                    </div>
                </Container>
            </Container>
        </div >
    )
}

