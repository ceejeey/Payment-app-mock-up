import React from 'react'
import * as style from './CardPreview_style.css'
import VisaLogo from '../assets/VisaLogo.svg'

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function CardPreview() {
    return (
        <div className={style.Container}>

             <div className={style.WrapNoActive}>
                <div className={style.CardNameWrapper}>
                    <img  src={VisaLogo} alt="HOME" />
                </div>
                <div className={style.CardNoContainer}>
                    <div className={style.CardNoWrapper}> **** </div>  
                    <div className={style.CardNo}>8014</div>
                </div>
                <div className={style.BalanceContainer}>
                    <div className={style.BalanceWrapper}><AttachMoneyIcon sx={{fontSize: 12 }}/>1,345.56</div>
                </div>
             </div>

            {/* ACTIVE CRAD */}

             <div className={style.Wrap}>
                <div className={style.CardNameWrapper}>
                    <img  src={VisaLogo} alt="HOME" />
                </div>
                <div className={style.CardNoContainer}>
                    <div className={style.CardNoWrapper}> **** </div>  
                    <div className={style.CardNo}>8014</div>
                </div>
                <div className={style.BalanceContainer}>
                    <div className={style.BalanceWrapper}><AttachMoneyIcon sx={{fontSize: 12 }}/>1,345.56</div> 
                </div>
             </div>

             <div className={style.WrapNoActive}>
                <div className={style.profilewrapper}> 
                <AddCircleIcon sx={{fontSize: 32}}/>
               </div> 
               <div className={style.profilNameewrapper}> 
                 New <br></br>
                 credit card
                 </div> 
             </div>

             
        </div>
    )
}

export default CardPreview
