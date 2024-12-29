import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home2 from './pages/Home2'
import Login from './pages/Login'
import Setting from './pages/Setting'
import Navbar2 from './components/Navbar2'
import PrivateRoute from './components/PrivateRoute'


function ProtectedRoutes() {
  return (

    <BrowserRouter>
    <Navbar2 />
      <Routes>
        <Route path='/' element={<Home2 />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/setting" element={<Setting />} /> */}
        < Route element={<PrivateRoute />} >
        <Route element={<Setting />} path="setting" />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default ProtectedRoutes