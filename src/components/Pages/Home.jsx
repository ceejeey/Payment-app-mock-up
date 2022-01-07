import React from 'react'
import * as style from './Home_style.css'
import { useState } from "react"

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StatusBar from '../StatusBar'
import Card from '../Card'
import TabBar from '../TabBar'
import SearchBar from '../SearchBar'
import Day from '../DateBar'
import TransCard from '../TransCard'


function Home() {

    const [toggleState, setToggleState] = useState(1);
    return (
        
        <div className={style.Container}>
            <StatusBar status="Your balance" balance={<AttachMoneyIcon sx={{fontSize: 32 }}/>} icon="926.21" />
            <Card />
            <TabBar option="Sent" option2="Received" setToggleState={setToggleState} toggleState={toggleState} />   
            <SearchBar />
            <Day header="Today" />
            <TransCard />
            <Day header="Yesterday" />
            <TransCard />
            <TransCard />
        </div>
    )
}

export default Home
