import React from 'react'
import * as style from './Transaction_style.css'

import StatusBar from '../StatusBar'
import TabBar from '../TabBar'
import Day from '../DateBar'
import { useState } from "react"
import CardPreview from '../CardPreview'
import RecipentCard from '../RecipentCard'
import TranscationField from '../TranscationField'



function Transaction() {

    const [toggleState, setToggleState] = useState(1);

    return (

        <div className={style.Container}>
           <StatusBar  balance="Send money" />
           <TabBar option="Card" option2="Bank" setToggleState={setToggleState} toggleState={toggleState} />  
           <Day header="Select credit card" />
           <CardPreview />
           <Day header="Recipient" Rightheader="Show all" />
           <RecipentCard />
           <Day header="Transaction details" />
           <TranscationField />
           <div className={style.Button}> 
            Confirm 
           </div>
        </div>
    )
}

export default Transaction
