import React from 'react'
import * as style from './SearchBar_style.css'
import Search from '../assets/Search.svg'

function SearchBar() {
    return (
        <div className={style.container}>
            <div className={style.TransWrapper}>Search transaction</div>
            <div className={style.TransIconWrapper}><img  src={Search} alt="HOME" /></div>
        </div>
    )
}

export default SearchBar
