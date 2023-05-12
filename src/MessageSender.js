import { Avatar } from '@mui/material'
import './MessageSender.css'
import React, { useState } from 'react'
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {  InsertEmoticon } from '@mui/icons-material';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';





function MessageSender() {
  
  const [{user}, dispatched] = useStateValue();

  const [input,setInput] =useState("");
  const [imageUrl,setImageUrl] = useState("");
  
  const nosubmit = (e)=>{
      e.preventDefault();
       db.collection('posts').add(
        {
          message : input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          profilePic: user.photoURL,
          username: user.displayName,
          image: imageUrl,

        }
       )
      setInput("");
      setImageUrl("");
    }

    

  return (
    <div className='MessageSender'>
        <div className='MessageSender_top'>
          <Avatar src ={user.photoURL}></Avatar>
           <form>
                <input value={input} onChange={(e) => setInput(e.target.value)}
                className='MessageSender_input' type='text' placeholder="Feel free to express !! "/>
                <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} 
                placeholder='image URL (Optional)' ></input>
                <button onClick={nosubmit} type='sumbit'>WALOU hh</button>
          </form>
        </div>

        <div className='MessageSender_bottom'>

           <div className='MessageSender_option'> 
              <CameraEnhanceIcon style={{color :'red'}}></CameraEnhanceIcon>
              <h3>Live video</h3>
          </div>

          <div className='MessageSender_option'> 
              <AddPhotoAlternateIcon style={{color :'green'}}></AddPhotoAlternateIcon>
              <h3>Photo/Video</h3> 
          </div> 
          <div className='MessageSender_option'> 
              <InsertEmoticon style={{color :'yellow'}}></InsertEmoticon>
              <h3>Humour/activity</h3> 
          </div> 
            
        </div>  
    </div>
  )
}

export default MessageSender