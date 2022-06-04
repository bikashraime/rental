import React from 'react'
import css from './Card.module.css'
import b3 from './Card pics/b3.jpg'
import location from './Card pics/location.svg'
import area from './Card pics/area.jpg'

function Card(props) {
    return (
        <div className={css.card}>
            <div className={css.picContainer}>
                <img src={b3} />
            </div>
            <div className={css.description}>
              <span className={css.detail}>{props.detail}</span>
              <div>
                <img src={location} />
                <span className={css.detail}>{props.location}</span>
              </div>
              <div>
                <img src={area} />
                <span>{props.area}</span>
              </div>
              <div>
                Rs. <span>{props.price}</span>
              </div>
            </div>
        </div>
    )
}
export default Card