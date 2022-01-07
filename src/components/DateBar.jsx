import React from 'react'
import * as style from './DateBar_style.css'

function Day(props) {

    const {header,Rightheader} = props

    return (
        <div className={style.container}>
            <div className={style.HeaderWrapper}>
            {header}
        </div>
        <div className={style.HeaderWrapper}>
            {Rightheader}
        </div>
        </div>
    )
}

export default Day
