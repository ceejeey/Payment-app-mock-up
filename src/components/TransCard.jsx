import React from 'react'
import * as style from './TransCard_style.css'

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function TransCard() {
    return (
        <div className={style.Container}>
           <div className={style.profilewrapper}> 
                <img className={style.profile} src="images\image 2.png" alt="HOME" />
           </div> 
           <div className={style.DetailsContainer}>
                <div className={style.DetailsWrapper}>
                    <div className={style.NameWrapper}>to: </div>
                    <div className={style.Name}> Rebecca Moore </div>
                </div> 
                <div className={style.DateWrapper}>20 January, 2019</div>
           </div> 
           <div className={style.AmountWrapper}> <AttachMoneyIcon sx={{fontSize: 24 }}/> 926.21 </div> 
        </div>
    )
}

export default TransCard
