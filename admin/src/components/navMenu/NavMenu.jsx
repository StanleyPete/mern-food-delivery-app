import React from 'react'
import './navMenu.css'
import { assets } from '../../assets/assets'

const NavMenu = () => {
  return (
    <div className='navmenu'>
        <img className="logo" src={assets.logo} alt="Company logo" />
        <img className="profile-image" src={assets.profile_image} alt="Profile image" />
      
    </div>
  )
}

export default NavMenu
