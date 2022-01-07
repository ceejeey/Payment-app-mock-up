import React from 'react'
import * as style from './Settings_style.css'

import SettingsCard from '../SettingsCard'
import StatusBar from '../StatusBar'

import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LanguageIcon from '@mui/icons-material/Language';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShieldIcon from '@mui/icons-material/Shield';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

function Settings() {
    return (
        <>
            <StatusBar balance="Settings" />
            <div className={style.Container}>
                <SettingsCard icon={<PriorityHighIcon sx={{ fontSize: 20}} />} settings="Profile Information" />
                <SettingsCard icon={<LockIcon sx={{ fontSize: 20 }} />} settings="Password" />
                <SettingsCard icon={<EmailIcon sx={{ fontSize: 20 }} />} settings="Email" />
                <SettingsCard icon={<PhoneIcon sx={{ fontSize: 20 }} />} settings="Phone Number" />
                <SettingsCard icon={<NotificationsIcon sx={{ fontSize: 20 }} />} settings="Notifications" />
                <SettingsCard icon={<AttachMoneyIcon sx={{ fontSize: 20 }} />} settings="Currency" />
                <SettingsCard icon={<LanguageIcon sx={{ fontSize: 20 }} />} settings="Language" />
                <SettingsCard icon={<ManageAccountsIcon sx={{ fontSize: 20 }} />} settings="Account" />
                <SettingsCard icon={<ShieldIcon sx={{ fontSize: 20 }} />} settings="Privacy Policy" />
                <SettingsCard icon={<QuestionMarkIcon sx={{ fontSize: 20 }} />} settings="Terms of Use" />
            </div>
             
        </>
    )
}

export default Settings
