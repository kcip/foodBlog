import React from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom'



const Header = () => {
  return (
    <header className="header">
      <div className="nav">
        <NavLink className="logo" to="/">Food Blog</NavLink>
        <div className="links">
          <NavLink className="link" to="/postcreate">Create Post</NavLink>
        </div>
      </div>
    </header>
  )
}
export default Header