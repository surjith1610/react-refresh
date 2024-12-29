import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
    const customer = useSelector(state => state.customerInfo.customer);
    if(!customer) {
        return (
            <Navigate to="/login"/>
        )
    }
  return (
    <Outlet />
  )
}

export default PrivateRoute