import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Avatar, IconButton } from '@mui/material';

function Header() {
  return (
    <div className='header'>
        
        <div className='header_left'>
           <img src='https://icons.iconarchive.com/icons/scafer31000/bubble-circle-2/512/Message-icon.png' alt='' />
           <div className='header_input'>
              <SearchIcon sx={{ fontSize: 40 }} ></SearchIcon>
              <input type='text ' />
            </div>
        </div>

        <div className='header_mid'>
          <HomeIcon className='option' sx={{ fontSize: 45 }}></HomeIcon>
          <OndemandVideoIcon className='option'sx={{ fontSize: 45 }}></OndemandVideoIcon>
          <AddCircleIcon className='option' sx={{ fontSize: 45 }}></AddCircleIcon>
         </div>

        <div className='header_right'>
          <div className='header_info'>
            <Avatar sx={{ fontSize: 55 }} ></Avatar>
            <h4>Ohio Citizen</h4>
          </div>
          <IconButton >
            
          </IconButton>
        </div>
        
    </div>
  )
}

export default Header