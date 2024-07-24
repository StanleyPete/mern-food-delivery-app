import React, { useState } from 'react'
import './navMenu.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const NavMenu = () => {

    const [navMenuState, setNav] = useState("Products");


  return (
    <div className='navmenu'>
      <img src={assets.logo} alt="Healthy Food company logo" className="logo" />
      <ul className="menu">
        <Link to='/' onClick={()=>setNav("Home")} className={navMenuState==="Home"?"active":""}>Home</Link>
        <a href='#explore-products'  onClick={()=>setNav("Products")} className={navMenuState==="Products"?"active":""}>Products</a>
        <a href='#mobile-app-download' onClick={()=>setNav("Mobile app")} className={navMenuState==="Mobile app"?"active":""}>Mobile app</a>
        <a href='#footer' onClick={()=>setNav("Contact us")} className={navMenuState==="Contact us"?"active":""}>Contact us</a>
      </ul>
      <div className="navmenu-right">
        <img src={assets.search_icon} alt="Search icon" />
        <div className="navmenu-search-icon">
          <img src={assets.basket_icon} alt="Basket icon" />
          <div className="dot"></div>
        </div>
        <div className="navmenu-right-buttons">
          <button>Sign in</button>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default NavMenu
