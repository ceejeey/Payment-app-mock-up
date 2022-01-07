import React from 'react'
import * as style from './NavBar_style.css'
import Menu from '../assets/Menu.svg'
import { Link } from "react-router-dom"

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

function NavBar({setPageState, PageState}) {

    const PageTab = (index) => {
        setPageState(index)
        console.log(index)
      }

    return (
        <div className={style.Container}>
            <div className={style.MenuWrapper}><img  src={Menu} alt="HOME" /></div>
             <div className={style.IconContainer}> 
             <Link to="/"> <div className={PageState === 1 ? style.ActiveIconWrapper : style.IconWrapper}onClick={() => PageTab(1)}> <HomeOutlinedIcon /> </div></Link>
             <Link to="/"> <div className={PageState === 2 ? style.ActiveIconWrapper : style.IconWrapper}onClick={() => PageTab(2)}> <AccountBalanceWalletOutlinedIcon /> </div></Link>
             <Link to="/Transaction">  <div className={PageState === 3 ? style.ActiveIconFABWrapper : style.IconFABWrapper }onClick={() => PageTab(3)}> <CreditCardOutlinedIcon /> </div></Link>
             <Link to="/">  <div className={PageState === 4 ? style.ActiveIconWrapper : style.IconWrapper}onClick={() => PageTab(4)}> <PieChartOutlineOutlinedIcon /> </div></Link>
             <Link to="/Settings"> <div className={PageState === 5 ? style.ActiveIconWrapper : style.IconWrapper}onClick={() => PageTab(5)}> <SettingsOutlinedIcon /> </div></Link>
             </div>
        </div>
    )
}

export default NavBar
