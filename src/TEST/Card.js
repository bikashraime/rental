import React from 'react'
import css from './Card.module.css'
import b3 from '../Component/Images/b3.jpg'
import house from '../Component/Images/house.jpg'

function Card(props) {
    return (
        <div className={css.main}>
            <div className={css.title}>
                <span>{props.title}</span>
                <button>View All</button>
            </div>
            <div className={css.container}>
                <div className={css.card} id={css.c1}>
                    <div className={css.picContainer}>
                        <img src={b3} />
                    </div>
                    <div className={css.description}>
                        <span>Real Estate</span>
                    </div>
                </div>
                <div className={css.card} id={css.c2}>
                    <div className={css.picContainer}>
                        <img src={house} />
                    </div>
                    <div className={css.description}>
                        <span>Vehicles</span>
                    </div>
                </div>
                <div className={css.card} id={css.c3}>
                    <div className={css.picContainer}>
                        <img src={b3}/>
                    </div>
                    <div className={css.description}>
                        <span>Fashion</span>
                    </div>
                </div>
                <div className={css.card} id={css.c4}>
                    <div className={css.picContainer}>
                        <img src={b3}/>
                    </div>
                    <div className={css.description}>
                        <span>Others</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
