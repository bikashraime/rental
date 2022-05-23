import React from 'react'
import css from './SearchArea.module.css'
import search from '../Images/search.svg'

function SearchArea() {
    return (
        <div className={css.main}>
            <div className={css.titleContainer}>
                <span className={css.title}>
                    How can we help you?
                </span>
            </div>
            <div className={css.searchArea}>
                <div className={css.searchContainer}>
                    <input className={css.searchBar} type="text" placeholder='Search' />
                    <button className={css.searchButton}><img className={css.searchIcon} src={search} /></button>

                </div>
            </div>
        </div>
    )
}

export default SearchArea