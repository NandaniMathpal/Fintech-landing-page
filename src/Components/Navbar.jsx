import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="logo">
          <h1>LOGO</h1>
        </div>

        <ul className="nav-lists">
          <li>Payment</li>
          <li>Banking</li>
          <li>Payroll</li>
          <li>Collaborate</li>
          <li>Partners</li>
          <li>Resources</li>
          <li>Plans</li>
        </ul>
      </div>

      <div className="nav-right">
        <div className="login">
          <button className="btn">Login</button>
          <button className="btn start">Get Started</button>
        </div>

        <div className="menu">
          <i className="ri-menu-5-line"></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar
