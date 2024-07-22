import React, { useState } from 'react'
import './productItem.css'
import { assets } from '../../assets/assets'

const ProductItem = ({id, name, price, description, image}) => {

    const [itemCount, setItemCount] = useState(0)
  return (
    <div className="product-item">
        <div className="product-item-img-container">
            <img className="product-item-image" src={image} alt="Product image" />
            {!itemCount
              ?
              <img className="add" onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt="Add product image" />
              :
              <div className="product-item-counter">
                <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="Remove product image" />
                <p>{itemCount}</p>
                <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="Add another product image" />
              </div>

            }
        </div>
        <div className="product-item-info">
            <div className="product-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_stars} alt="Rating stars image" />
            </div>
            <p className="product-item-description">{description}</p>
            <p className="product-item-price">${price}</p>
        </div>
      
    </div>
  )
}

export default ProductItem
