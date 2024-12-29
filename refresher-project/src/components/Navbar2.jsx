import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {removeCustomer } from '../slices/customerSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Navbar2() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = () => {
        dispatch(
            removeCustomer()
        )
        navigate('/login')
    }

    const customer = useSelector(state => state.customerInfo.customer)
  return (
    <nav>
        <h1>Navbar 2</h1>
        <ul>
            {
                !customer && <li><Link to="/login">Login</Link></li>
            }
     {
        customer && (
            <>
        <li>
            <Link to="/">Home</Link>
          </li>
            <li><Link to="/setting">Setting</Link></li>
            <li onClick={logout} >Logout</li>
      </>
        )
     } 
        </ul>
    </nav>
  )
}

export default Navbar2