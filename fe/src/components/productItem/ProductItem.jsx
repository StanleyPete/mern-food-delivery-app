import React from 'react'
import './productItem.css'
import { assets } from '../../assets/assets'

const ProductItem = ({id, name, price, description, image}) => {
  return (
    <div className='product-item'>
        <div className="product-item-img-container">
            <img className="product-item-image" src={image} alt="" />
        </div>
        <div className="product-item-info">
            <div className="product-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_stars} alt="" />
            </div>
            <p className="product-item-description">{description}</p>
            <p className="product-item-price">${price}</p>
        </div>
      
    </div>
  )
}

export default ProductItem
