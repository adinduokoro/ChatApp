import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import { auth , provider} from "./firebase"
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'


function Login() {
  const [{} , dispatch] = useStateValue()

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      })
    }).catch((error) => alert(error.message))
  }

  return (
    <div className='login'>
      <div className='login__container'>
        <img src="https://icons-for-free.com/iconfiles/png/512/chat+online+chatting+conversation+talk+whats+app+icon-1320166529743825540.png" alt=""/>
        <div className='login__text'>
          <h1>Sign in to WhatsApp Clone</h1>
        </div>
        <Button onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  )
}

export default Login