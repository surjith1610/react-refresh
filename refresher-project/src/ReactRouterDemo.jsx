import React from 'react'
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Employee from './pages/Employee'
import Navbar from './components/Navbar'
import { ErrorPage } from './pages/Error'

export const ReactRouterDemo = () => {
  return (
   <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
   </BrowserRouter>
  )
}
