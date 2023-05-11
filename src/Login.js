import React from 'react'
import './Login.css'
import { auth, provider } from "./firebase";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
  const [state , dispatch] = useStateValue();

    const signIn = ()=> {
        //  sign in authentification
        auth
        .signInWithPopup(provider)
        .then((result) => {
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          });
        })
        .catch(error => alert(error.message));  
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