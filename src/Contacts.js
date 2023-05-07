import React from 'react'
import Friend from './Friend';
import "./Contacts.css"


function Contacts() {
  return (
    <div className='contacts'>
      <h3 className='contacts_header'>Contacts</h3>
      <div className='contact_list'>
        <Friend friendName="Amine runsTheJellews"></Friend>
        <Friend friendName="Mohammed Aymane Rjimmati"></Friend>
        <Friend friendName="Mohammed Salim Zidouh"></Friend>  
      </div>
      
    </div>
  )
}

export default Contacts;