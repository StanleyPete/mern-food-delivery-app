import React, { useState, useEffect }from 'react'
import './orders.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'


const Orders = ({url}) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list_orders");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  }

  useEffect(() => {
    fetchAllOrders();
  },[])

  return (
    <div className="order added">
      <h3>Orders page</h3>
      <div className="order-list">
        {orders.map((order, index)=>(
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="Parcel icon image" />
            <div>
              <p className="order-item-products">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity
                  } else {
                    return item.name + " x " + item.quantity + ", "
                  }
                })}
              </p>
              <p className="order-item-name">{order.address.firstName + " " + order.address.lastName}</p>
              <div className="order-item-address">
                <p>{order.address.street + ","}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
                <p className="order-item-phone">{order.address.phone}</p>
              </div>
            </div>
              <p>Items: {order.items.length}</p>
              <p>${order.amount}</p>
              <select>
                <option value="In progress">In progress</option>
                <option value="Picked up by delivery man">Picked up by delivery man</option>
                <option value="Delivered">Delivered</option>
              </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
