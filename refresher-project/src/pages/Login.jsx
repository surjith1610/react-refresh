import React from 'react'
import { useDispatch } from 'react-redux'
import { setCustomer } from '../slices/customerSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const login = () => {
        dispatch(
            setCustomer({
                name: 'John',
                email: 'john@gmail.com'
            })
        )
        navigate('/')
    }

    
  return (
   <>
   <div>Login</div>
    <button onClick={login}>Login</button>
   </> 
    
  )
}

export default Login