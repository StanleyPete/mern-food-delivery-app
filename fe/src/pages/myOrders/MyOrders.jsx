import React from 'react'
import './myOrders.css'
import { useState, useContext, useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { assets } from '../../assets/assets'


const MyOrders = () => {

    const {url, token} = useContext(StoreContext);
    const [ordersData, setOrdersData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/user_orders", {}, {headers:{token}});
        setOrdersData(response.data.data);
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        } 
    }, [token])

  return (
    <div className="my-orders">
      <h2>My orders</h2>
      <div className="container">
        {ordersData.map((order, index)=>{
            return (
                <div key={index} className="my-orders-order">
                    <img src={assets.parcel_icon} alt="Parcel icon image" />
                    <p>{order.items.map((item, index)=>{
                        if (index===order.items.length - 1) {
                            return item.name + " x " + item.quantity
                        } else {
                            return item.name + " x " + item.quantity + ", "
                        }
                    })}</p>
                    <p>${order.amount}.00</p>
                    <p>Types of products: {order.items.length}</p>
                    <p><span>&#x25cf;</span><b> {order.status}</b></p>
                    <button>Track order</button>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default MyOrders
