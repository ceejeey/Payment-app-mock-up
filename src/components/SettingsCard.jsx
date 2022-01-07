import React from 'react'
import * as style from './SettingsCard_style.css'



function SettingsCard(props) {

    const{icon, settings} = props

    return (
        // <div className={style.Container}>
            <div className={style.Wrap}>
                 <div className={style.IconWrap}> 
                        <div className={style.profilewrapper}> 
                        {icon}
                        </div>
                    </div> 
                    <div className={style.profilNameewrapper}> 
                         {settings}
                   </div> 
            </div>
        // </div>
    )
}

export default SettingsCard
