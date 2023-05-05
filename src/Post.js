import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import { Comment, Share, ThumbUp } from '@mui/icons-material'



function Post({profilePic , username ,message ,timestamp , image}) {
  return (
    <div className='post'>
        <div className='post_top'>
            <Avatar className='post_avatar' src={profilePic}></Avatar>
            <div className='post_info'>
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

        <div className='post_options'>
            <div className='post_option'>
                <ThumbUp></ThumbUp>
                <p>Like</p>
            </div>

            <div className='post_option'>
                <Comment></Comment>
                <p>Comment</p>
            </div>

            <div className='post_option'>
                <Share></Share>
                <p>Share</p>
            </div>

        </div>

    </div>
  )
}

export default Post