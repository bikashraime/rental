import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Categorylist() {

    let lists = [
        ['Room', <i class="fa-solid fa-person-shelter"></i>],
        ['Flat & Apartments', <i class="fa-solid fa-bed"></i>],
        ['House', <i class="fa-solid fa-house"></i>],
        ['Shop', <i class="fa-solid fa-cart-shopping"></i>],
        ['Land', <i class="fa-solid fa-earth-asia"></i>],
        ['Factory', <i class="fa-solid fa-industry"></i>],
        ['Cafeteria', <i class="fa-solid fa-mug-hot"></i>],
        ['Hotel', <i class="fa-solid fa-hotel"></i>]
    ]

    let list_jsx = []

    for (let item of lists) {
        list_jsx.push(
            <div style={{ marginRight: '1.5rem' ,padding:'.4rem', borderRadius: 5,border:'1px solid #7d7c7c', backgroundColor:'white'}}>
                <NavLink to='*' style={{textDecoration: 'none', color:'inherit'}}>
                <span style={{ marginRight: '.4rem' }}>{item[1]}</span>
                    <span>{item[0]}</span>
                </NavLink>

            </div>
        )
    }

    const categoryStyle = {
        // border: '1px solid green',
        padding: '1rem',
        marginTop: '1rem',
        borderRadius: '5px',
        backgroundColor: '#F4F4F4'
    }

    return (
        <>
            <div className='container' style={categoryStyle}>
                <div>
                    <span>All Categories</span>
                </div>
                <div style={{ borderBottom: '1px solid black', margin: '.5rem 0' }}></div>
                <div className='d-flex'>
                    {list_jsx}
                </div>
            </div>


        </>
    )
}
