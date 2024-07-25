import React, { useContext } from 'react'
import './checkout.css'
import { StoreContext } from '../../context/StoreContext'

const Checkout= () => {

    const {getBasketTotal} = useContext(StoreContext); 

  return (
    <form className="checkout">
      <div className="checkout-left">
        <p className="title">Delivery information</p>
        <div className="double-fields">
          <input type="text" placeholder="First name"/>
          <input type="text" placeholder="Last name"/>
        </div>
        <input type="email" placeholder="E-mail address"/>
        <input type="text" placeholder="Address"/>
        <div className="double-fields">
          <input type="text" placeholder="City"/>
          <input type="text" placeholder="State"/>
        </div>
        <div className="double-fields">
          <input type="text" placeholder="Zip code"/>
          <input type="text" placeholder="Country"/>
        </div>
        <input type="text"placeholder="Phone"/>
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
                <p>${2.75}</p>
              </div>
              <hr />
              <div className="basket-total-details">
                <b>Total</b>
                <b>${getBasketTotal()+2.75}</b>
              </div>
            </div>
            <button>PAY NOW</button>
          </div>
      </div>
    </form>
  )
}

export default Checkout
