import React from 'react'
import { NavLink } from 'react-router-dom'
import './category_dropdown.css'


export default function CategoryDropdown() {
    let lists = [
        ['ROOM', <i class="fa-solid fa-person-shelter"></i>, '/viewall/room', 'key1'],
        ['APARTMENT', <i class="fa-solid fa-bed"></i>, '/viewall/apartment', 'key2'],
        ['HOUSE', <i class="fa-solid fa-house"></i>, '/viewall/house', 'key3'],
        ['SHOP', <i class="fa-solid fa-cart-shopping"></i>, '/viewall/shop', 'key4'],
        ['LAND', <i class="fa-solid fa-earth-asia"></i>, '/viewall/land', 'key5'],
        ['FACTORY', <i class="fa-solid fa-industry"></i>, '/viewall/factory', 'key6'],
        ['CAFETERIA', <i class="fa-solid fa-mug-hot"></i>, '/viewall/cafe', 'key7'],
        ['HOTEL', <i class="fa-solid fa-hotel"></i>, '/viewall/hotel', 'key8']
    ]

    let list_jsx = [];

    for (let item of lists) {
        list_jsx.push(
            <div key={item[3]} className='category-dropdown-component'>
                <NavLink to={item[2]} className='category-dropdown-navlink'>
                    <div style={{ marginRight: '.4rem' }}>{item[1]}</div>
                    <div>{item[0]}</div>
                </NavLink>
            </div>
        )
    }
    return (
        <div>
            <div className="category-dropdown">
                {list_jsx}

            </div>
        </div>
    )
}
