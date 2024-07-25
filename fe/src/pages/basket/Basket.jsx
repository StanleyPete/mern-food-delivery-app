import React, { useContext } from 'react'
import './basket.css'
import { StoreContext } from '../../context/StoreContext';

const Basket = () => {

    const {basketItems, product_list, removeFromBasket} = useContext(StoreContext);
  return (
    <div className="basket">
      <div className="basket-items">
        <div className="basket-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {product_list.map((item, index)=>{
          if(basketItems[item._id]>0){
            return (
              <div>
                <div className="basket-items-title basket-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{basketItems[item._id]}</p>
                  <p>${item.price*basketItems[item._id]}</p>
                  <p onClick={()=>removeFromBasket(item._id)} className="remove">x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="basket-summary">
        <div className="basket-total">
          <h2>Basket Totals</h2>
          <div>
            <div className="basket-total-details">
              <p>Subtotal</p>
              <p>{0}</p>
            </div>
            <hr />
            <div className="basket-total-details">
              <p>Delivery Fee</p>
              <p>${2.75}</p>
            </div>
            <hr />
            <div className="basket-total-details">
              <b>Total</b>
              <b>${0}</b>
            </div>
          </div>
        <button>PAY NOW</button>
        </div>
      <div className="basket-promocode">
        <div>
          <p>Discount:</p>
          <div className="basket-promocde-input">
            <input type="text" placeholder="Enter your promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
      </div>

      
    </div>
  )
}

export default Basket
