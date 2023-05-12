import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'

function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp' ,'desc').onSnapshot(snapshot =>  setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
    );
  }
  )

  return (
    <div className='feed'>
        <MessageSender></MessageSender>

        {posts.map(post => (
          <Post 
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          ></Post>
        )
          )}


        <Post
          profilePic= "https://i.pinimg.com/originals/69/d3/54/69d3544a8be4bd47b295bf443db298ab.jpg"
          username="Weld Ohio"
          //timestamp="12:69"
          message="Hi what a beautiful day"
          image="https://i.redd.it/dvcot8ktzde51.jpg"
        ></Post>

        <Post
          profilePic= "https://i.pinimg.com/originals/6a/45/23/6a4523e42b7fd0d8f2f244798c00c39e.jpg"
          username="Baghrira the Chiller"
          //timestamp="13:59"
          message="<333333"
          image="https://i.pinimg.com/originals/53/6c/03/536c03658ef8879c3ec2289f7e1b1ce2.jpg"
        ></Post>

        <Post
          profilePic= "https://i.pinimg.com/originals/b6/b0/5f/b6b05f7e630e75f705d5961b2a371ddf.jpg"
          username="Tuxa"
          //timestamp="7:99"
          message="Cats"
          image="https://i.redd.it/15yde3uq7x811.jpg"
        ></Post>
   
        
    </div>
  )
} 

export default Feed