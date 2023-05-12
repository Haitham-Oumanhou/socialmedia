import { Avatar } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';


function Messagebox({src , username}) {
  return (
    <div className='messageBox'>
        <div className='messageBox_up'>
            {src ? <Avatar src={src}></Avatar> : <Avatar></Avatar>}
            <p>{username}</p>
            <CloseIcon></CloseIcon>
        </div>   
    <div>
      
    </div>

    </div>
  )
}

export default Messagebox