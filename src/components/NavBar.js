import React from 'react'
import Logo from '../assets/dytelogo.png'

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt='logo' />
        <h2>Consulting</h2>
    </div>
  )
}

export default NavBar