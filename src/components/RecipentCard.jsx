import React from 'react'
import * as style from './RecipentCard_style.css'

function RecipentCard() {
    return (
        <div className={style.Container}>
            <div className={style.Wrap}>
                <div className={style.profilewrapper}> 
                    <img className={style.profile} src="images\image 2.png" alt="HOME" />
                </div> 
                <div className={style.profilNameewrapper}> 
                Franz Ferdinand
                </div> 
            </div>

            <div className={style.WrapNoActive}>
                <div className={style.profilewrapper}> 
                    <img className={style.profile} src="images\image 2.png" alt="HOME" />
                </div> 
                <div className={style.profilNameewrapper}> 
                Franz Ferdinand
                </div> 
            </div>
        </div>
    )
}

export default RecipentCard
