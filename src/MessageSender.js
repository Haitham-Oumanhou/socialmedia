import { Avatar } from '@mui/material'
import './MessageSender.css'
import React from 'react'
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


const nosubmit = (e)=>{
    e.preventDefault();
}

function MessageSender() {
  return (
    <div className='MessageSender'>
        <div className='MessageSender_top'>
          <Avatar></Avatar>
           <form>
                <input className='MessageSender_input' type='text' placeholder="Feel free to express !! "/>
                <input placeholder='imagae URL (Optional)' ></input>
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
              <AddPhotoAlternateIcon style={{color :'green'}}></AddPhotoAlternateIcon>
              <h3>Photo/Video</h3> 
          </div> 
            
        </div>  
    </div>
  )
}

export default MessageSender