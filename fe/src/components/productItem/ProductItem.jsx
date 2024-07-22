import React, { useContext} from 'react'
import './productItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const ProductItem = ({id, name, price, description, image}) => {

    const {basketItems, addToBasket, removeFromBasket} = useContext(StoreContext)

  return (
    <div className="product-item">
        <div className="product-item-img-container">
            <img className="product-item-image" src={image} alt="Product image" />
            {!basketItems[id]
              ?
              <img className="add" onClick={()=>addToBasket(id)} src={assets.add_icon_white} alt="Add product image" />
              :
              <div className="product-item-counter">
                <img onClick={()=>removeFromBasket(id)} src={assets.remove_icon_red} alt="Remove product image" />
                <p>{basketItems[id]}</p>
                <img onClick={()=>addToBasket(id)} src={assets.add_icon_green} alt="Add another product image" />
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
