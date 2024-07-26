import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-buttons-container">
            <NavLink to="/add_product" className="sidebar-button">
                <img src={assets.add_image} alt="Add product button" />
                <p>Add product</p>
            </NavLink>
            <NavLink to="/list_products" className="sidebar-button">
                <img src={assets.order_image} alt="List products button" />
                <p>List products</p>
            </NavLink>
            <NavLink to="/orders" className="sidebar-button">
                <img src={assets.order_image} alt="Orders button" />
                <p>Orders</p>
            </NavLink>
        </div>
      
    </div>
  )
}

export default Sidebar
