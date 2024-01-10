import React from 'react'
import logo from "../assets/logo.png"
import "./header.css"

export const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="" className='logo' />
        <a href="/">Home</a>
    </div>
  )
}
