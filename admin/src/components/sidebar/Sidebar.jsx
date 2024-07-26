import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-buttons-container">
            <div className="sidebar-button">
                <img src={assets.add_image} alt="Add button" />
                <p>Add item</p>
            </div>
            <div className="sidebar-button">
                <img src={assets.order_image} alt="List Items button" />
                <p>List items</p>
            </div>
            <div className="sidebar-button">
                <img src={assets.order_image} alt="Orders button" />
                <p>Orders</p>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
