import React from 'react'
import * as style from './TranscationField_style.css'

function TranscationField() {
    return (
        <div className={style.Container}>
            <div className={style.InputWrap}>
                <input className={style.Input} type="text" name="name" />
                <label className={style.Label}> Amount </label>
            </div>
            <div className={style.DescWrap}>
                <input className={style.DescInput} type="text" name="name" placeholder='Description' />
            </div>
        </div>
        
    )
}

export default TranscationField
