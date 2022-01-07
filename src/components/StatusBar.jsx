import React from 'react'
import * as style from './StatusBar_style.css'




function StatusBar(props) {

    const{status,balance,icon} = props

    return (
        <div className={style.container}>
            <div className={style.statustypewrapper}>
                <p>{status}</p>
            </div>
            <div className={style.statuscontainer}>
                <div className={style.statusiconwrapper}>
                    {balance} {icon}
                </div>
                <div className={style.profilewrapper}>
                 <img className={style.profile} src="images\image 2.png" alt="HOME" />
                </div>
            </div>
        </div>
    )
}

export default StatusBar
