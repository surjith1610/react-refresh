import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <h3>Navbar</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/employee">Employee</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> 
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>   
    </nav>
  )
}

export default Navbar