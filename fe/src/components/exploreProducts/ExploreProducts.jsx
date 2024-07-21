import React from 'react'
import './exploreProducts.css'
import { product_list } from '../../assets/assets'

const ExploreProducts = () => {
  return (
    <div className='explore-products' id='explore-products'>
        <h2>Explore our products</h2>
        <p className='explore-products-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia quae quaerat numquam eius temporibus aliquam cumque omnis? Sunt, distinctio ducimus? Voluptatum officiis voluptatibus omnis quis repellat facere autem perspiciatis.</p>
        <div className='explore-products-list'>
            {product_list.map((item, index) => {
                return (
                    <div key={index} className="explore-products-list-item">
                        <img src={item.product_image} alt="" />
                        <p>{item.product_name}</p>
                    </div>
                )
            })}


        </div>
        <hr/>
    </div>
  )
}

export default ExploreProducts
