import React from 'react'
import Friend from './Friend';
import "./Contacts.css"


function Contacts() {
  return (
    <div className='contacts'>
      <h3 className='contacts_header'>Contacts</h3>
      <div className='contact_list'>
        <Friend friendName="Amine runsTheJellews"
        friendProfilePic="https://images.theconversation.com/files/84530/original/image-20150610-6814-cxat24.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"></Friend>
        <Friend friendName="Mohammed Aymane Rjimati"
        friendProfilePic="https://www.expositionpeinture.com/le-chat-blanc-aux-yeux-verts-1666084883-398-2022-10.jpg"></Friend>
        <Friend friendName="Mohammed Salim Zidouh"
        friendProfilePic="https://media.discordapp.net/attachments/1097589262813245504/1105958810977304637/IMG_5535.png?width=567&height=670"></Friend>
        <Friend friendName="Reda ElGaf"
        friendProfilePic="https://i.imgflip.com/cnudu.jpg"></Friend>  
      </div>
      
    </div>
  )
}

export default Contacts;