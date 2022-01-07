import React from 'react'
import * as style from './TabBar_style.css'

function TabBar(props) {

    const{option, option2,setToggleState, toggleState} = props
    
    const toggleTab = (index) => {
        setToggleState(index)
    }
    
    

    return (
        <div className={style.container}>
            <div className={toggleState === 1 ? style.ActiveWrapper : style.NotActiveWrapper}onClick={() => toggleTab(1)}>{option}</div>
            <div className={toggleState === 2 ? style.ActiveWrapper : style.NotActiveWrapper}onClick={() => toggleTab(2)}>{option2}</div>
        </div>
    )
}
export default TabBar
