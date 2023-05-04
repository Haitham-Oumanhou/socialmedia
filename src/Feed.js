import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
        <MessageSender></MessageSender>
        <Post
          profilePic= "https://i.pinimg.com/originals/69/d3/54/69d3544a8be4bd47b295bf443db298ab.jpg"
          username="wELD Ohio"
          timestamp="12:69"
          message="Hi what a beautiful day"
          image="https://i.redd.it/dvcot8ktzde51.jpg"
        ></Post>
   
        
    </div>
  )
} 

export default Feed