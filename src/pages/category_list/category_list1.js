import React from 'react'
import { NavLink } from 'react-router-dom'
import './category_list1.css'

export default function Categorylist1() {

    let lists = [
        ['ROOM', <i class="fa-solid fa-person-shelter fa-3x"></i>, '/viewall/room'],
        ['APARTMENT', <i class="fa-solid fa-bed fa-3x"></i>, '/viewall/apartment'],
        ['HOUSE', <i class="fa-solid fa-house fa-3x"></i>, '/viewall/house'],
        ['SHOP SPACE', <i class="fa-solid fa-cart-shopping fa-3x"></i>, '/viewall/shop'],
        ['LAND', <i class="fa-solid fa-earth-asia fa-3x"></i>, '/viewall/land'],
        ['FACTORY', <i class="fa-solid fa-industry fa-3x"></i>, '/viewall/factory'],
        ['CAFETERIA', <i class="fa-solid fa-mug-hot fa-3x"></i>, '/viewall/cafe'],
        ['HOTEL', <i class="fa-solid fa-hotel fa-3x"></i>, '/viewall/hotel']
    ]

    let list_jsx = []

    for (let item of lists) {
        list_jsx.push(
            <div className='category-list-component'>
                <NavLink to={item[2]} className='category-list-component-navlink'>
                    <div style={{ marginRight: '.4rem' }}>{item[1]}</div>
                    <div>{item[0]}</div>
                </NavLink>
            </div>
        )
    }


    return (
        <>
            <div className='container category-list'>
                {list_jsx}
            </div>
        </>
    )
}
