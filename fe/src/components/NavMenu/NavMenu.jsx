import React, { useContext, useState, } from 'react'
import './navMenu.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom'


const NavMenu = ({setShowLogin, setShowSignUp}) => {

    const [navMenuState, setNav] = useState("Products");
    const {getBasketTotal, token, setToken} = useContext(StoreContext);
    const goTo = useNavigate();
    

    const logOut = () => {
      //removing token from local storage:
      localStorage.removeItem("token");
      //removing token from state:
      setToken("");
      goTo("/")

    }

  return (
    <div className="navmenu">
      <Link to="/"><img src={assets.logo} alt="Healthy Food company logo" className="logo" /></Link>
      <ul className="menu">
        <Link to="/" onClick={()=>setNav("Home")} className={navMenuState==="Home" ? "active" : ""}>Home</Link>
        <a href="#explore-products" onClick={()=>setNav("Products")} className={navMenuState==="Products" ? "active" : ""}>Products</a>
        <a href="#mobile-app-download" onClick={()=>setNav("Mobile app")} className={navMenuState==="Mobile app" ? "active" : ""}>Mobile app</a>
        <a href="#footer" onClick={()=>setNav("Contact us")} className={navMenuState==="Contact us" ? "active" : ""}>Contact us</a>
      </ul>
      <div className="navmenu-right">
        <img src={assets.search_icon} alt="Search icon" />
        <div className="navmenu-search-icon">
          <Link to="/basket"><img src={assets.basket_icon} alt="Basket icon" /></Link>
          <div className={getBasketTotal()===0 ? "" : "dot "}></div>
        </div>
        <div className="navmenu-right-buttons">
          {!token 
          ? 
          <>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
            <button onClick={()=>setShowSignUp(true)}>Sign up</button>
          </>
          :
          <div className="navmenu-profile">
            <img src={assets.profile_icon} alt="Profile icon image" />
            <ul className="navmenu-profile-dropdown">
              <li><img src={assets.bag_icon} alt="Bag icon image" /><p>Order</p></li>
              <hr />
              <li onClick={logOut}><img src={assets.logout_icon} alt="Logout icon image" /><p>Logout</p></li>
            </ul>
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default NavMenu
