import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './checkout.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'



const Checkout= () => {

    const {getBasketTotal, token, product_list, basketItems, url} = useContext(StoreContext); 

    const goTo = useNavigate();

    //State variable where information from order form is stored:
    const [data, setData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      state: "",
      country: "",
      zipcode: "",
      phone: ""
    });

    //Saving form data in data state:
    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data => ({...data,[name]:value}));
    };

    //onChangeHandler check:
    // useEffect(() => {
    //   console.log(data)
    // },[data]);

    const placeOrder = async (event) => {
      event.preventDefault();
      let orderItems = [];
      //adding quantity to orderItems array:
      product_list.map((item) => {
        if (basketItems[item._id] > 0) {
          let itemInfo = item;
          itemInfo["quantity"] = basketItems[item._id];
          orderItems.push(itemInfo);
          
        }
      });

     let orderData = {
      address: data,
      items: orderItems,
      amount: getBasketTotal() + 2
     }

     let response = await axios.post(url + "/api/order/place_order", orderData, {headers: {token}});
     if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
     } else {
      
      alert("Error");
     }
    }

    //Logged in users can proceed to payment confition:
    useEffect(() => {
      if (!token) {
        goTo("/basket");
      } else if (getBasketTotal() === 0) {
        goTo("/basket");
      }
    },[token])

  return (
    <form onSubmit={placeOrder} className="checkout">
      <div className="checkout-left">
        <p className="title">Delivery information</p>
        <div className="double-fields">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First name"/>
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last name"/>
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="E-mail address"/>
        <input required name='address' onChange={onChangeHandler} value={data.address} type="text" placeholder="Address"/>
        <div className="double-fields">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder="City"/>
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder="State"/>
        </div>
        <div className="double-fields">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder="Zip code"/>
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder="Country"/>
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text"placeholder="Phone"/>
      </div>
      <div className="checkout-right">
        <div className="basket-total">
            <h2>Basket Totals</h2>
            <div>
              <div className="basket-total-details">
                <p>Subtotal</p>
                <p>${getBasketTotal()}</p>
              </div>
              <hr />
              <div className="basket-total-details">
                <p>Delivery Fee</p>
                <p>${getBasketTotal() === 0 ? 0 : 2.75}</p>
              </div>
              <hr />
              <div className="basket-total-details">
                <b>Total</b>
                <b>${getBasketTotal() === 0 ? 0 : getBasketTotal() + 2.75}</b>
              </div>
            </div>
            <button type="submit">PAY NOW</button>
          </div>
      </div>
    </form>
  )
}

export default Checkout
