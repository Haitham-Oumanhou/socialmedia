import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'


function Post({profilePic , username ,message ,timestamp , image}) {
  return (
    <div className='post'>
        <div className='post_top'>
            <Avatar className='post_avatar' src={profilePic}></Avatar>
            <div className='wraps'>
                <h3>{username}</h3>
                <p>{timestamp}</p>
            </div>
            
        </div>

        <div className='post_bottom'>
            <p>{message}</p>
        </div>

        <div className='post_image'>
            <img src={image} alt=''/>    
        </div>

    </div>
  )
}

export default Post