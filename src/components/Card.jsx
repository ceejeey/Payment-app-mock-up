
import React from 'react'
import VisaLogo from '../assets/VisaLogo.svg'
import Icon from '../assets/Icon.svg'

import * as style from './Card_style.css'

function Card(props) {
    return (
        
        <div className={style.Container}>
             <div className={style.Wrap}>
                <div className={style.NoActive}>
                    <div className={style.CardNameContainer}>
                        <div className={style.CardNameWrapper}>
                        <img  src={VisaLogo} alt="HOME" />
                        </div>
                        <div className={style.CardIconWrapper}>
                        <img  src={Icon} alt="HOME" />
                        </div>
                    </div>
                    <div className={style.CardNoContainer}>
                        <div className={style.CardNoWrapper}> **** </div>  
                        <div className={style.CardNoWrapper}> **** </div>  
                        <div className={style.CardNoWrapper}>  </div>  
                        <div className={style.CardNo}>8014</div>
                    </div>
                    <div className={style.CardDetailsContainer}>
                        <div className={style.CardHolderContainer}> 
                            <div >CARD HOLDER</div>
                            <div >EXPIRES</div>
                        </div>
                        <div className={style.CardHolderDetailsContainer}> 
                            <div className={style.CardDetailswrapper}>Lindsey Johnson</div>
                            <div className={style.CardExpireswrapper}>08/21</div>
                        </div>
                    </div>
                </div>
             </div>

{/* ACTIVE CARD */}

             <div className={style.Wrap}>
                <div className={style.CardContainer}>
                    <div className={style.CardNameContainer}>
                        <div className={style.CardNameWrapper}>
                        <img  src={VisaLogo} alt="HOME" />
                        </div>
                        <div className={style.CardIconWrapper}>
                        <img  src={Icon} alt="HOME" />
                        </div>
                    </div>
                    <div className={style.CardNoContainer}>
                        <div className={style.CardNoWrapper}> **** </div>  
                        <div className={style.CardNoWrapper}> **** </div>  
                        <div className={style.CardNoWrapper}> **** </div>  
                        <div className={style.CardNo}>8014</div>
                    </div>
                    <div className={style.CardDetailsContainer}>
                        <div className={style.CardHolderContainer}> 
                            <div >CARD HOLDER</div>
                            <div >EXPIRES</div>
                        </div>
                        <div className={style.CardHolderDetailsContainer}> 
                            <div className={style.CardDetailswrapper}>Lindsey Johnson</div>
                            <div className={style.CardExpireswrapper}>08/21</div>
                        </div>
                    </div>
                </div>
             </div>

{/* NON ACTIVE CARD */}

             <div className={style.Wrap}>
                <div className={style.NoActive2}>
                    <div className={style.CardNameContainer}>
                        <div className={style.CardNameWrapper}>
                        <img  src={VisaLogo} alt="HOME" />
                        </div>
                        <div className={style.CardIconWrapper}>
                        <img  src={Icon} alt="HOME" />
                        </div>
                    </div>
                    <div className={style.CardNoContainer}>
                        <div className={style.CardNoWrapper}> **** </div>  
                        <div className={style.CardNoWrapper}> **** </div>  
                        <div className={style.CardNoWrapper}>  </div>  
                        <div className={style.CardNo}>8014</div>
                    </div>
                    <div className={style.CardDetailsContainer}>
                        <div className={style.CardHolderContainer}> 
                            <div >CARD HOLDER</div>
                            <div >EXPIRES</div>
                        </div>
                        <div className={style.CardHolderDetailsContainer}> 
                            <div className={style.CardDetailswrapper}>Lindsey Johnson</div>
                            <div className={style.CardExpireswrapper}>08/21</div>
                        </div>
                    </div>
                </div>
             </div>

        </div>
    )
}

export default Card
