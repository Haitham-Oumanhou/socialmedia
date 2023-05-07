import { Avatar } from '@mui/material'
import React from 'react'
import "./Friend.css"

function Friend({friendProfilePic , friendName }) {
  return (
    <div
    className='friend'>
        {(friendProfilePic) ?<Avatar src={friendProfilePic}></Avatar> : <Avatar></Avatar> }
        <p>{friendName}</p>
    </div>
  )
}

export default Friend