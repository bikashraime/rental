import React from 'react'
import './view_all_page.css'
import { RentalCard } from '../../../components/rental_card'

export default function ViewAll(props) {
    let card_collection = []

    for (let i = 0; i < 15; i++) {
        card_collection.push(<RentalCard />)
    }

    let title = props.title? props.title : 'No title';

    return (
        <div className="container">
            <div className="viewall-header">
                <span className='viewall-title'>{title}</span>
                <div className="viewall-detail">
                    Showing 100 properties
                </div>

            </div>
            <div style={{borderBottom: '1px solid black', margin: '0.5rem 0'}}></div>
            <div className="viewall-grid">
                {card_collection}
            </div>
        </div>
    )
}
