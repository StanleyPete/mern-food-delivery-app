import React, { useState } from 'react'
import './NavMenu.css'
import { assets } from '../../assets/assets'

const NavMenu = () => {

    const [navMenuState, setNav] = useState("Products");


  return (
    <div className='navmenu'>
      <img src={assets.logo} alt="Healthy Food company logo" className="logo" />
      <ul className="menu">
        <li onClick={()=>setNav("Home")} className={navMenuState==="Home"?"active":""}>Home</li>
        <li onClick={()=>setNav("Products")} className={navMenuState==="Products"?"active":""}>Products</li>
        <li onClick={()=>setNav("About us")} className={navMenuState==="About us"?"active":""}>About us</li>
        <li onClick={()=>setNav("Contact us")} className={navMenuState==="Contact us"?"active":""}>Contact us</li>
      </ul>
      <div className="navmenu-right">
        <img src={assets.search_icon} alt="Search icon" />
        <div className="navmenu-search-icon">
          <img src={assets.basket_icon} alt="Basket icon" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
        <button>Sign up</button>
       
      </div>
    </div>
  )
}

export default NavMenu
