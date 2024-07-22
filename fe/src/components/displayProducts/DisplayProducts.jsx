import React from 'react'
import './displayProducts.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import ProductItem from '../productItem/ProductItem'

const DisplayProducts = ({category}) => {

    const {product_list} = useContext(StoreContext)

  return (
    <div className='display-products' id='display-products'>
        <h2>Top products near you</h2>
        <div className="display-products-list">
          {product_list.map((item, index)=>{
            return <ProductItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          })}
        </div>
    </div>
  )
}

export default DisplayProducts
