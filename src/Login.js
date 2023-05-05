import React from 'react'
import './Login.css'


function Login() {
    const signIn = ()=> {
        //TODO  sign in authentification
    }
  return (
    <div className='login'>
        <div className='login_logo'>
            <img src='https://icons.iconarchive.com/icons/scafer31000/bubble-circle-2/512/Message-icon.png' alt='' />
            <h1>Ohio Social Media</h1>
        </div>

        <button onClick={signIn}
        className='login_but' type='submit'> Sign in
        </button>

    </div>
  )
}

export default Login